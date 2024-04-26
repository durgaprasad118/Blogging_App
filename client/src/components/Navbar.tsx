import { useState } from "react";
import { DarkThemeToggle } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tokenAtom } from "../store/atoms";
import { SquarePen } from "lucide-react";
import { Dropdown } from "./Dropdown";
import logo from "../assets/logo.png";
const Header = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};
	const userInfo = useRecoilValue(tokenAtom);
	return (
		<nav className="bg-opacity-40 backdrop-blur-lg bg-gray-100  dark:bg-gray-800 sticky top-0 w-full z-[100]">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center gap-x-1 sm:hidden">
						<button
							type="button"
							onClick={toggleMobileMenu}
							className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded={isMobileMenuOpen}
						>
							<span className="absolute -inset-0.5"></span>
							<span className="sr-only">Open main menu</span>
							<svg
								className={`h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
							<svg
								className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<Link to={"/"}>
								<img
									loading="lazy"
									className="h-12 w-12 dark:bg-gray-200 dark:rounded-full md:block hidden"
									src={logo}
									alt="Your Company"
								/>
							</Link>
						</div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4 ">
								<NavLink
									to={"/"}
									className={({ isActive }) =>
										`dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-300 hover:dark:text-white rounded-md px-3 py-2 text-sm font-medium ${
											isActive &&
											` border-b-2 border-blue-600 rounded-t-lg`
										}`
									}
								>
									Home
								</NavLink>
								<NavLink
									to={"/blogs"}
									className={({ isActive }) =>
										` dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-300 hover:dark:text-white rounded-md px-3 py-2 text-sm font-medium ${
											isActive &&
											` border-b-2 border-blue-600 rounded-t-lg`
										}`
									}
								>
									Blogs
								</NavLink>
								<NavLink
									to={"/about"}
									className={({ isActive }) =>
										` dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-300 hover:dark:text-white rounded-md px-3 py-2 text-sm font-medium ${
											isActive &&
											` border-b-2 border-blue-600 rounded-t-lg`
										}`
									}
								>
									About
								</NavLink>
								<>
									<DarkThemeToggle></DarkThemeToggle>
								</>
							</div>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<div className="relative ml-3">
							{userInfo ? (
								<div className="flex items-center gap-x-3">
									<Link
										to={"/write"}
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:text-sm md:px-5 md:py-2.5 px-2 py-1.5 text-xs text-center mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
									>
										<SquarePen className="inline pr-2" />
										Write{" "}
									</Link>
									<DarkThemeToggle className="block md:hidden"></DarkThemeToggle>
									<>
										<Dropdown></Dropdown>
									</>
								</div>
							) : (
								<div className="flex items-center">
									<DarkThemeToggle className="md:hidden block"></DarkThemeToggle>
									<Link
										to={"/signup"}
										type="button"
										className="text-white md:mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  md:font-medium  rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Register
									</Link>
									<Link
										to={"/login"}
										type="button"
										className="md:block hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  md:font-medium  rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Login
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			<div
				className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
				id="mobile-menu"
			>
				<div className="space-y-1 px-2 pb-3 pt-2 bg-gray-50 dark:text-gray-200 text-gray-600   dark:bg-gray-800 ">
					<div className="flex items-center justify-center gap-x-1">
						<img
							loading="lazy"
							className="h-12 w-12 dark:bg-gray-200 dark:rounded-full md:block hidden"
							src={logo}
							alt="Your Company"
						/>
						<h1
							className="text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold
            "
						>
							InkWell
						</h1>
					</div>
					<NavLink
						to={"/"}
						onClick={() => toggleMobileMenu()}
						aria-current="page"
						className={({ isActive }) =>
							`hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium ${
								isActive && `bg-gray-700  text-white`
							}`
						}
					>
						Home
					</NavLink>
					<NavLink
						onClick={() => toggleMobileMenu()}
						to={"/blogs"}
						className={({ isActive }) =>
							`hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium ${
								isActive && `bg-gray-700  text-white`
							}`
						}
					>
						Blogs
					</NavLink>
					<NavLink
						to={"/about"}
						onClick={() => toggleMobileMenu()}
						className={({ isActive }) =>
							`hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium ${
								isActive && `bg-gray-700  text-white`
							}`
						}
					>
						About
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export { Header };
