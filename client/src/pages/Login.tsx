import axios from "axios";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { toast } from "sonner";
import { tokenAtom } from "../store/atoms";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const setValue = useSetRecoilState(tokenAtom);
	async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			setLoading(true);
			const { data } = await axios.post(
				`${import.meta.env.VITE_URL}/user/signin`,
				{
					email,
					password,
				},
			);
			setLoading(false);
			localStorage.setItem("token", data.data.token);
			setValue(data.data.token);
			setEmail("");
			setPassword("");
			navigate("/");
			toast.success(data.message);
		} catch (error: unknown) {
			setEmail("");
			setPassword("");
			setLoading(false);
			toast.error(error?.response?.data?.message);
		}
	}
	return (
		<div className="  dark:bg-gray-900 bg-blend-multiply text-gray-800 dark:text-gray-50  ">
			<div className="flex flex-col w-screen mx-auto   justify-center px-6 py-8   lg:py-0">
				<form
					onSubmit={submitHandler}
					className="flex max-w-md flex-col gap-4"
				>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="email2" value="Your email" />
						</div>
						<TextInput
							id="email2"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="name@gamil.com"
							required
							shadow
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="password2" value="Your password" />
						</div>
						<TextInput
							id="password2"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							shadow
						/>
					</div>
					<div className="flex items-center gap-2">
						<Checkbox id="agree" />
						<Label htmlFor="agree" className="flex">
							I agree with the&nbsp;
							<Link to={"/"}>
								<span className="text-blue-600 underline dark:text-blue-500">
									terms and conditions
								</span>
							</Link>
						</Label>
					</div>
					<Button
						isProcessing={loading}
						disabled={loading}
						type="submit"
						color="blue"
					>
						Login
					</Button>
					<div className="mt-2  opacity-80  text-center gap-2">
						Don't have an account
						<Link to={"/signup"}>
							<span className="text-blue-600 underline dark:text-blue-500">
								Create one
							</span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export { Login };
