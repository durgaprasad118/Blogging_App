import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { HashPasswrd } from "../../utils/HashPassword";
import { UserSignup } from "../../utils/Types";
const SignUp = async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const {success} = UserSignup.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        success: false,
        message: 'please enter your details correctly',
      })
    }
    const existingUser = await prisma.user.findUnique({
      where:{
        email:body.email
      }
    })
    if(existingUser){
      return c.json({
        success: false,
        message: "user exists already please login",
      });
    }
    const hashedPswd :string = await HashPasswrd(body.password);
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPswd
      },
    });
    const token = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET,
    );
    return c.json({
      success: true,
      message: "user created sucessfully",
      data: {
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
    return c.json({
      success: false,
      message: "Failed to create User",
    });
  }
};

export { SignUp };
