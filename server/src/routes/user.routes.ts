import { Hono } from "hono";
import { SignUp, Signin, updateUser, userDetails } from "../contorllers/user";
import { authMiddleware } from "../middleware/authMiddleware";

const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
userRouter.post("/signup", SignUp);
userRouter.post("/signin", Signin);
userRouter.put("/update", authMiddleware, updateUser);
userRouter.get("/details", authMiddleware, userDetails);
export { userRouter };

