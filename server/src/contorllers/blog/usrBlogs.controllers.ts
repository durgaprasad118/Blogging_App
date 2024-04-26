import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const getUserBlogs = async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const userId: string = c.get("userId");
    const blogs = await prisma.post.findMany({
      where: {
        authorId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return c.json({
      success: true,
      message: "user blogs fetched sucessfully",
      data: {
        blogs: blogs,
      },
    });
  } catch (error) {
    console.log(error);
    return c.json({
      success: false,
      message: "Failed to fetched blogs",
    });
  }
};

export { getUserBlogs };
