import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const deleteBlog = async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const id = c.req.param("id");
    const blog = await prisma.post.delete({
      where: {
        id: id,
      },
    });
    return c.json({
      success: true,
      message: "blog deleted sucessfully",
      // data: {
      //   id: blog.id,
      // },
    });
  } catch (error) {
    console.log(error);
    return c.json({
      success: false,
      message: "Failed to delete blog",
    });
  }
};

export { deleteBlog };
