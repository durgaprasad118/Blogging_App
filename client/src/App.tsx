import { RecoilRoot } from "recoil";
import { Toaster } from "sonner";
import Routing from "./Layouts/Routing";
const App = () => {
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
