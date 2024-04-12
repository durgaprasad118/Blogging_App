import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const getUserBlogs = async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    console.log(
      "control reahed here"
    );
    const userId:string = c.get("userId");
    console.log(userId ," this is the userID")
    const blogs = await prisma.post.findMany({
      where: {
        authorId:userId
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
