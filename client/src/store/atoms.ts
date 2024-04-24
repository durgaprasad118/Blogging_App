import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
const BASE_URL = import.meta.env.VITE_URL;
const tokenAtom = atom({
	key: "tokenAtom",
	default: localStorage.getItem("token"),
});
const userIdAtom = atom({
	key: "userIdAtom",
	default: "",
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
const filterAtom = atom({
	key: "filterAtom",
	default: "",
});
const allBlogs = atomFamily({
	key: "allBlogs",
	default: selectorFamily({
		key: "allBlogsSelector",
		get:
			() =>
			async ({ get }) => {
				const filter = get(filterAtom);
				const { data } = await axios.get(
					`${BASE_URL}/blog/bulk?filter=` + filter,
				);
				return data;
			},
	}),
});

const userBlogs = atom({
	key: "userBlogs",
	default: selector({
		key: "userBlogSelector",
		get: async ({ get }) => {
			const Usertoken = get(tokenAtom);
			const { data } = await axios.get(`${BASE_URL}/blog/usrBlogs`, {
				headers: {
					Authorization: "Bearer " + Usertoken,
				},
			});
			return data;
		},
	}),
});
const particularBlog = atomFamily({
	key: "particularBlog",
	default: selectorFamily({
		key: `particularBlog_$`,
		get:
			(id: string) =>
			async ({ get }) => {
				const Usertoken = get(tokenAtom);
				const { data } = await axios.get(`${BASE_URL}/blog/${id}`, {
					headers: {
						Authorization: "Bearer " + Usertoken,
					},
				});
				return data?.data?.blogs;
			},
	}),
});

export {
	allBlogs,
	userIdAtom,
	userBlogs,
	particularBlog,
	tokenAtom,
	userdetailsAtom,
	filterAtom,
};
