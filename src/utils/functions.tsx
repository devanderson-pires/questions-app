export function shuffle(array: string[]) {
	array.sort(() => Math.random() - 0.25);
}
