import { useEffect, useState } from "react";
const useDebounce = (value: string): string => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
		}, 1000);
		return () => {
			clearTimeout(timeout);
		};
	}, [value]);
	return debouncedValue;
};

export { useDebounce };
