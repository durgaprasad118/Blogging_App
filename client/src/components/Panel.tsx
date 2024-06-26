import { useRef, useState, useImperativeHandle, forwardRef } from "react";
import { Plus, Minus } from "lucide-react";
import "aos/dist/aos.css";

interface PanelProps {
	id: number;
	description: string;
	title: string;
}

interface PanelRef {
	scrollIntoView: () => void;
}

const Panel = forwardRef<PanelRef, PanelProps>(
	({ id, description, title }, ref) => {
		const contentRef = useRef<HTMLDivElement>(null);
		const [isActive, setisActive] = useState(-1);
		useImperativeHandle(ref, () => ({
			scrollIntoView: () => {
				contentRef.current?.scrollIntoView({ behavior: "smooth" });
			},
		}));

		function handleclick(id: number) {
			setisActive(isActive === id ? -1 : id);
		}

		return (
			<div
				className="flex-col cursor-pointer gap-y-10 w-full md:w-3/4 flex justify-center"
				data-aos="fade-right"
			>
				<div className="dark:bg-gray-800 dark:border-gray-700 bg-white border border-gray-200 duration-500 ease-in-out rounded-lg text-gray-900 dark:text-white">
					<div
						className="flex flex-row w-full justify-between h-10 p-4 py-8 items-center"
						onClick={() => handleclick(id)}
					>
						<h1 className="md:text-lg text-md font-semibold">
							{title}
						</h1>
						{isActive === id ? <Minus /> : <Plus />}
					</div>

					<div
						style={
							isActive === id
								? {
										maxHeight:
											contentRef.current?.scrollHeight +
											"px",
									}
								: { maxHeight: "0px" }
						}
						ref={contentRef}
						className="max-h-0 overflow-hidden dark:bg-gray-600 bg-gray-200 transition-all duration-500 ease-out rounded-b-lg"
					>
						<p className="p-3 text-xs md:text-lg">{description}</p>
					</div>
				</div>
			</div>
		);
	},
);

export { Panel };
