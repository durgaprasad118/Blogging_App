import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const getAllUserBlogs = async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const filter = c.req.query("filter") || "";
    const blogs = await prisma.post.findMany({
      where: {
        OR: [
          {
            title: {
              contains: filter,
              mode: "insensitive",
            },
          },
          {
            content: {
              contains: filter,
              mode: "insensitive",
            },
          },
        ],
      },
      include: {
        author: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return c.json({
      success: true,
      message: "blogs fetched sucessfully",
      data: {
        blogs: blogs,
      },
    });
  } catch (error) {
    console.log(error);
    return c.json({
      success: false,
      message: "Failed to get  blogs",
    });
  }
};
export { getAllUserBlogs };
