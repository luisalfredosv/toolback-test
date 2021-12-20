import { isPalindrome, reverseText } from "../src/utils/index";

describe("Unit Test", () => {
	test("Check is palindrome, return false", () => {
		const text = "test";
		const reverse = "tset";

		const response = isPalindrome(reverse, text);
		expect(response).toEqual(false);
	});

	test("Check is palindrome, return true", () => {
		const text = "oso";
		const reverse = "oso";

		const response = isPalindrome(reverse, text);
		expect(response).toEqual(true);
	});

	test("Reverse text", () => {
		const text = "Hi, how are you?";
		const reverse = "?uoy era woh ,iH";

		const response = reverseText(text);
		expect(response).toEqual(reverse);
	});
});
