import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { BlogCreate } from "../../utils/Types";
const createBlog = async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const userId: string = c.get("userId");
    const body = await c.req.json();
    const { success } = BlogCreate.safeParse(body);
    if (!success) {
      c.status(411);
      return c.json({
        success: false,
        message: "please enter your details correctly",
      });
    }
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        image: body.image,
        authorId: userId,
        labels: body.labels.map((label: string) => {
          return label;
        }),
      },
    });
    return c.json({
      success: true,
      message: "blog created sucessfully",
      data: {
        id: blog.id,
      },
    });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
      success: false,
      message: "Failed to create Blog",
    });
  }
};

export { createBlog };
