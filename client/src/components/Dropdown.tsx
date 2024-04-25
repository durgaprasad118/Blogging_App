import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { tokenAtom, userIdAtom, userdetailsAtom } from "../store/atoms";
import Profile from "../assets/Profile.png";
const Dropdown = () => {
	const navigate = useNavigate();
	let userName = "";
	const { state, contents } = useRecoilValueLoadable(userdetailsAtom);
	const setUserId = useSetRecoilState(userIdAtom);
	if (state == "hasValue") {
		setUserId(contents?.id);
		userName = contents?.name;
	}
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	const setValue = useSetRecoilState(tokenAtom);

	const closeDropdown = () => {
		setIsOpen(false);
	};

	return (
		<div className="relative inline-block text-left">
			<img
				loading="lazy"
				src={Profile}
				alt="Dropdown button"
				onClick={toggleDropdown}
				className={`cursor-pointer h-14 w-14`}
			/>

			{isOpen && (
				<div className="z-10 absolute right-0 mt-2 py-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
					<ul
						className="text-sm text-gray-700 dark:text-gray-200 text-center"
						aria-labelledby="dropdownDefaultButton"
					>
						<li>
							<a className="block px-4 py-2  dark:hover:bg-gray-600 dark:hover:text-white  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
								{userName}
							</a>
						</li>
						<li>
							<Link
								to={"/myblogs"}
								className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								onClick={closeDropdown}
							>
								My blogs
							</Link>
						</li>
						<li>
							<Link
								to={"/settings"}
								className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								onClick={closeDropdown}
							>
								Settings
							</Link>
						</li>

						<li>
							<a
								className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover-text-white"
								onClick={() => {
									closeDropdown();
									setValue(null);
									localStorage.removeItem("token");
									navigate("/");
								}}
							>
								Sign out
							</a>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export { Dropdown };
