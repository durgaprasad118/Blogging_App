import { RecoilRoot } from "recoil";
import { Toaster } from "sonner";
import Routing from "./Layouts/Routing";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.css";
const App = () => {
	useEffect(() => {
		AOS.init({ duration: "1000" });
	}, []);
	return (
		<RecoilRoot>
			<Routing />
			<Toaster
				toastOptions={{
					className: "py-3",
				}}
				expand={true}
				position="top-right"
				richColors
				closeButton
			/>
		</RecoilRoot>
	);
};

export default App;
