import { Hono } from "hono";
import { SignUp, Signin } from "../contorllers/user";


 const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL : string;
        JWT_SECRET: string;
    }
}>();

userRouter.post("/signup",SignUp);
userRouter.post("/signin",Signin);
export {
    userRouter
}