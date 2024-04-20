import axios from "axios";
import { atom, selector } from "recoil";
const BASE_URL = import.meta.env.VITE_URL;
const tokenAtom = atom({
	key: "tokenAtom",
	default: localStorage.getItem("token"),
});
const userdetailsAtom = atom({
	key: "userdetailsAtom",
	default: selector({
		key: "userdetailsSelector",
		get: async ({ get }) => {
			const Usertoken = get(tokenAtom);
			const { data } = await axios.get(`${BASE_URL}/user/details`, {
				headers: {
					Authorization: "Bearer " + Usertoken,
				},
			});
			return data.data.user;
		},
	}),
});

const allBlogs = atom({
	key: "allBlogs",
	default: selector({
		key: "allBlogsSelector",
		get: async () => {
			const { data } = await axios.get(`${BASE_URL}/blog/bulk`);
			return data;
		},
	}),
});
export { tokenAtom, userdetailsAtom, allBlogs };
