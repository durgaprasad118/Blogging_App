import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
function useUpload() {
	const [loading, setLoading] = useState(false);
	const [url, setUrl] = useState<string | null>(null);
	const uploadImage = async (image: File | null) => {
		const dataUpload = new FormData();
		setLoading(true);
		if (image) {
			dataUpload.append("file", image);
		}
		dataUpload.append("upload_preset", "ml_default");

		try {
			const response = await axios.post(
				"https://api.cloudinary.com/v1_1/dqldwnp13/image/upload",
				dataUpload,
			);
			setLoading(false);
			setUrl(response.data.url);
			toast.success("uploaded successfully");
		} catch (error) {
			toast.error("Upload failed");
			console.log(error);
			setLoading(false);
			setUrl(null);
		}
	};
	return { loading, uploadImage, url };
}

export { useUpload };
