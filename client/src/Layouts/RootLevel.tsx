import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";
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
