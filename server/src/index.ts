import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from "hono/jwt";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});
//signup route
app.post("/user/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    const token = await sign({
      id: user.id
    },c.env.JWT_SECRET);
    return c.json({
      success: true,
      message: "user created sucessfully",
      data: {
        token : token
      },
    });
  } catch (error) {
    console.log(error);
    return c.json({
      success: false,
      message: "Failed to create User",
    });
  }
});

app.post("/user/signin", async(c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    //if user exists or not!
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if(!user){
      c.status(403);
      return c.json({
        success:false,
        message: "please sign Up",
      });
    }
    // verifying password
    if(user.password !== body.password){
      c.status(403);
      return c.json({
        success:false,
        message: "Invalid password",
      });
    }
    const token = await sign({
      id: user.id
    },c.env.JWT_SECRET);
    c.status(200);
    return c.json({
      success: true,
      message: "user signed In sucessfully",
      data: {
        token : token
      },
    });
  } catch (error) {
    console.log(error);
    return c.json({
      success: false,
      message: "Failed to create User",
    });
  }
})
app.post("/blog", (c) => {
  return c.text("blog");
});

app.post("/blog/:id", (c) => {
  return c.text("blog 1");
});

app.post("/blog/bulk", (c) => {
  return c.text("Bulkish");
});

export default app;
