import express from "express";

import { reverseText, isPalindrome } from "../utils/index";

const router = express.Router();

router.get("/", ({ query }, res) => {
	const text = query.text;

	if (!text) {
		res.status(400).json({
			error: "no text",
		});
		return;
	}

	const resultReverse = reverseText(text);
	const resultPalindrome = isPalindrome(resultReverse, text);

	const response = {
		text: resultReverse,
		palindrome: resultPalindrome,
	};

	res.json(response);
	return;
});

export default router;
