import express from "express";

const router = express.Router();

router.get("/", ({ query }, res) => {
	const text = query.text;

	if (!text) {
		res.status(400).json({
			error: "no text",
		});
	}

	const reverseText = text.split("").reverse().join("");
	const isPalindrome = reverseText === text ? true : false;

	const response = {
		text: reverseText,
		palindrome: isPalindrome,
	};

	res.json(response);
});

export default router;
