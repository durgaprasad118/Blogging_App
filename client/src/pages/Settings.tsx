import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import {
	useRecoilRefresher_UNSTABLE,
	useRecoilValue,
	useRecoilValueLoadable,
} from "recoil";
import { toast } from "sonner";
import { tokenAtom, userdetailsAtom } from "../store/atoms";
const Settings = () => {
	const { state, contents } = useRecoilValueLoadable(userdetailsAtom);
	const [name, setName] = useState("");
	const [Newpassword, setNewpassword] = useState("");
	const [Currentpassword, setCurrentpassword] = useState("");
	const [loading, setLoading] = useState(false);
	const refresh = useRecoilRefresher_UNSTABLE(userdetailsAtom);
	const token = useRecoilValue(tokenAtom);
	useEffect(() => {
		if (state == "hasValue") {
			setName(contents?.name);
		}
	}, [contents, setName, state]);
	async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			setLoading(true);
			const { data } = await axios.put(
				`${import.meta.env.VITE_URL}/user/update`,
				{
					Currentpassword: Currentpassword,
					Newpassword: Newpassword,
					name: name,
				},
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				},
			);
			setLoading(false);
			toast.success(data.message);
			refresh();
		} catch (error: unknown) {
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
							<Label htmlFor="name" value="Name" />
						</div>
						<TextInput
							id="email2"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="xyzName"
							required
							shadow
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="email" value="Current Password" />
						</div>
						<TextInput
							id="email"
							type="email"
							value={Currentpassword}
							onChange={(e) => setCurrentpassword(e.target.value)}
							placeholder="..."
							shadow
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="password2" value="New password" />
						</div>
						<TextInput
							id="password2"
							type="password"
							value={Newpassword}
							placeholder="...."
							onChange={(e) => setNewpassword(e.target.value)}
							shadow
						/>
					</div>
					<Button
						isProcessing={loading}
						disabled={loading}
						type="submit"
						color="blue"
					>
						Update Details
					</Button>
				</form>
			</div>
		</div>
	);
};

export { Settings };
