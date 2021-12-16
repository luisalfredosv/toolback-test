import express from "express";

import { reverseText } from "../utils/reverseText";
import { isPalindrome } from "../utils/isPalindrome";

const router = express.Router();

router.get("/", ({ query }, res) => {
	const text = query.text;

	if (!text) {
		res.status(400).json({
			error: "no text",
		});
	}

	const resultReverse = reverseText(text);
	const resultPalindrome = isPalindrome(resultReverse, text);

	const response = {
		text: resultReverse,
		palindrome: resultPalindrome,
	};

	res.json(response);
});

export default router;
