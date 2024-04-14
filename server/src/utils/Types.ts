import { z } from "zod";

const UserSignup = z.object({
    email: z.string().email(),
    password:z.string().min(3),
    name: z.string().optional()
})
const UserSignin = z.object({
    email: z.string().email(),
    password:z.string().min(3),
})
const BlogCreate = z.object({
    title: z.string(),
    content:z.string(),
    published: z.boolean(),
    image :z.string().optional()
})

export {
    UserSignin,
    UserSignup,
    BlogCreate
}