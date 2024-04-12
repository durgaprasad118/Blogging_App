import { verify } from "hono/jwt";

const authMiddleware = async (c, next) => {
  try {
    const authHeader = c.req.header("Authorization") || "";
    const token = authHeader.split(" ")[1];
    if (!token) {
      return c.json({
        success: false,
        message: "token invalid",
      });
    }
    const user = await verify(token, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id);
      await next();
    }
  } catch (error) {
    console.log(error);
    c.status(403);
    return c.json({
      success: false,
      message: "token invalid",
    });
  }
};
export { authMiddleware };
