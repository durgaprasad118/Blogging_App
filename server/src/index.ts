import { Hono } from 'hono';
import { blogRouter, userRouter } from './routes';
import { cors } from 'hono/cors';
import { getAllUserBlogs } from './contorllers/blog';
const app = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
}>();
app.use(cors());
app.get('/', getAllUserBlogs);

app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);
export default app;
