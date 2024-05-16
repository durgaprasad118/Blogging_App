import { AxiosError } from "axios";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { toast } from "sonner";
function SummarizeModal({ content }: { content: string }) {
	const [openModal, setOpenModal] = useState(false);
	const [loading, setLoading] = useState(false);
	const [summary, setSummary] = useState("");
	async function callOpenAIAPI(): Promise<void> {
		try {
			const requestOptions: RequestInit = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization:
						"Bearer " + String(import.meta.env.VITE_API_KEY),
				},
				body: JSON.stringify({
					model: "gpt-3.5-turbo",
					messages: [
						{
							role: "user",
							content:
								"Prepare to summarize your blog's HTML content in 30-40 words for clarity and understanding and emphasize the blogs main objective of the following content: " +
								content,
						},
					],
				}),
			};
			setLoading(true);
			const response = await fetch(
				import.meta.env.VITE_OPENAI,
				requestOptions
			);
			const data = await response.json();
			setSummary(data.choices[0].message.content);
			setOpenModal(true);
			setLoading(false);
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error);
				toast.error(error.response?.data?.message);
			}
			setOpenModal(false);
			setLoading(false);
		}
	}
	return (
		<>
			<Button
				color="purple"
				disabled={loading}
				isProcessing={loading}
				onClick={() => callOpenAIAPI()}
			>
				Summarize
			</Button>
			<Modal
				className="z-[1000]"
				show={openModal}
				size="md"
				onClose={() => setOpenModal(false)}
				popup
			>
				<Modal.Header>
					<p className="text-transparent bg-clip-text bg-gradient-to-r  to-emerald-600 from-sky-500 px-8 text-xl underline font-semibold pt-2">
						Summary
					</p>
				</Modal.Header>
				<Modal.Body>
					<div className="text-center">
						<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
							{summary}
						</h3>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}
export { SummarizeModal };
