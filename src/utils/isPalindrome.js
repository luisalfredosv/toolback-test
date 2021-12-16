export const isPalindrome = (resultReverse, text) => {
	const reverseText = resultReverse.toLowerCase();
	const originalText = text.split(" ").toString().toLowerCase();

	return reverseText === originalText ? true : false;
};
