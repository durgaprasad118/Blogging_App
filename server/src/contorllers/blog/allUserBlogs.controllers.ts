import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const getAllUserBlogs = async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blogs = await prisma.post.findMany();
    return c.json({
      success: true,
      message: "blog updated sucessfully",
      data: {
        blogs: blogs,
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

export { getAllUserBlogs };
