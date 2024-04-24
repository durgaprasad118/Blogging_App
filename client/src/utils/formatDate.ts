function dateFormat(dateStr: Date): string {
	const date = new Date(dateStr);
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate();
	return `${day}-${month}-${year}`;
}
function readingTime(wordCount: number): number {
	const wordsPerMinute = 200;
	const minutes = wordCount / wordsPerMinute;
	return Math.ceil(minutes);
}
function getRandomColorFromSet(colors: string[]) {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
const colors = [
	"info",
	"failure",
	"success",
	"warning",
	"indigo",
	"purple",
	"pink",
];
export { dateFormat, readingTime, getRandomColorFromSet, colors };
