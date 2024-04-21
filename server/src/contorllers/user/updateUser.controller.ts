import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { CheckPassword, HashPasswrd } from "../../utils/HashPassword";
const updateUser = async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
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
        message: "please sign Up",
      });
    }
    if (body.Newpassword) {
      const validPassword = await CheckPassword(
        user.password,
        body.Currentpassword,
      );
      if (!validPassword) {
        c.status(403);
        return c.json({
          success: false,
          message: "Invalid password",
        });
      }
      const hashedPswd = await HashPasswrd(body.Newpassword);
      user.password = hashedPswd;
    }
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name: body.name || user.name,
        password: user.password,
      },
    });
    c.status(200);
    return c.json({
      success: true,
      message: "user details updated sucessfully",
    });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
      success: false,
      message: "Failed to signin User",
    });
  }
};

export { updateUser };
