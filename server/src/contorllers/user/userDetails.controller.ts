import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const userDetails = async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const userId: string = c.get("userId");
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      c.status(403);
      return c.json({
        success: false,
        message: "user not found",
      });
    }

    c.status(200);
    return c.json({
      success: true,
      message: "user details updated sucessfully",
      data: {
        user: {
          name: user.name,
          id: user.id,
        },
      },
    });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
      success: false,
      message: "Failed to get userDetails",
    });
  }
};

export { userDetails };
