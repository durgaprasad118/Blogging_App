import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { BlogCreate } from "../../utils/Types";
const updateBlog = async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const id = c.req.param("id");
    const userId:string = c.get("userId");
    const body = await c.req.json();
    const {success} = BlogCreate.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        success: false,
        message: 'please enter your details correctly',
      })
    }
    const blog = await prisma.post.update({
      where: {
        id: id,
        authorId: userId
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
      },
    });
    return c.json({
      success: true,
      message: "blog updated sucessfully",
      data: {
        id: blog.id,
      },
    });
  } catch (error) {
    console.log(error);
    return c.json({
      success: false,
      message: "Failed to update blog",
    });
  }
};

export { updateBlog };
