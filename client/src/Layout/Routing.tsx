import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../hooks";
import {
	About,
	BlogEdit,
	BlogPage,
	BlogWrite,
	Home,
	Login,
	Settings,
	Signup,
	UserDashBoard,
} from "../pages";
import { Blogs } from "../pages/Blogs";
import RootLevel from "./RootLevel";
const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootLevel></RootLevel>}>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/write"
						element={
							<ProtectedRoute>
								<BlogWrite />
							</ProtectedRoute>
						}
					/>
					<Route path="/blog/:id" element={<BlogPage />} />
					<Route
						path="/blog/edit/:id"
						element={
							<ProtectedRoute>
								<BlogEdit />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/settings"
						element={
							<ProtectedRoute>
								<Settings />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/myblogs"
						element={
							<ProtectedRoute>
								<UserDashBoard />
							</ProtectedRoute>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
