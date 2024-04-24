import axios from "axios";
import { Button, Modal } from "flowbite-react";
import { Info } from "lucide-react";
import { useState } from "react";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { toast } from "sonner";
import { allBlogs, tokenAtom } from "../store/atoms";
import { useNavigate } from "react-router-dom";
function DeleteModal({ id }: { id: string }) {
	const [openModal, setOpenModal] = useState(false);
	const BASE_URL = import.meta.env.VITE_URL;
	const token = useRecoilValue(tokenAtom);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const fetchBlogs = useRecoilRefresher_UNSTABLE(allBlogs(""));
	async function deleteBlog() {
		try {
			setLoading(true);
			const { data } = await axios.delete(
				`${BASE_URL}/blog/delete/${id}`,
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				},
			);

			setLoading(false);
			toast.success(data?.message);
			fetchBlogs();
			navigate("/blogs");
		} catch (error: unknown) {
			console.log(error);
			toast.error(error?.response.data?.message || "An error occured");
		}
	}
	return (
		<>
			<Button
				color="red"
				disabled={loading}
				isProcessing={loading}
				onClick={() => setOpenModal(true)}
			>
				Delete
			</Button>
			<Modal
				className="z-[1000]"
				show={openModal}
				size="md"
				onClose={() => setOpenModal(false)}
				popup
			>
				<Modal.Header />
				<Modal.Body>
					<div className="text-center">
						<Info className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
						<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
							Are you sure you want to delete the blog?
						</h3>
						<div className="flex justify-center gap-4">
							<Button
								color="failure"
								onClick={() => {
									setOpenModal(false);
									deleteBlog();
								}}
							>
								{"Yes, I'm sure"}
							</Button>
							<Button
								color="gray"
								onClick={() => setOpenModal(false)}
							>
								No, cancel
							</Button>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}
export { DeleteModal };
