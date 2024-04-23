import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const particularBlog = async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const id = c.req.param("id");
    const userId: string = c.get("userId");
    const blogs = await prisma.post.findUnique({
      where: {
        id: id,
        authorId: userId,
      },
    });
    return c.json({
      success: true,
      message: "blog fetched sucessfully",
      data: {
        blogs: blogs,
      },
    });
  } catch (error) {
    console.log(error);
    return c.json({
      success: false,
      message: "Failed to get blog",
    });
  }
};

export { particularBlog };
