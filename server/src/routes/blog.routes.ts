import { Hono } from "hono";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createBlog,
  deleteBlog,
  getAllUserBlogs,
  getUserBlogs,
  particularBlog,
  updateBlog,
} from "../contorllers/blog";

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.post("/create", authMiddleware, createBlog);
blogRouter.get("/usrBlogs", authMiddleware, getUserBlogs);
blogRouter.get("/bulk", getAllUserBlogs);
blogRouter.put("/update/:id", authMiddleware, updateBlog);
blogRouter.get("/:id", authMiddleware, particularBlog);
blogRouter.delete("/delete/:id", authMiddleware, deleteBlog);

export { blogRouter };
