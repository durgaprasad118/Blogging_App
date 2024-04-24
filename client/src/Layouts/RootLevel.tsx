import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
const RootLevel = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default RootLevel;
