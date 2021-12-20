import supertest from "supertest";
import { app, server } from "../src/server";

const api = supertest(app);

describe("Integration Test", () => {
	test("GET /iecho return text reverse and return is a palindrome", async () => {
		const response = await api
			.get("/iecho?text=sol")
			.expect(200)
			.expect("Content-Type", /application\/json/);
	});

	test("GET /iecho return error 400 not text", async () => {
		const response = await api
			.get("/iecho?text=")
			.expect(400)
			.expect("Content-Type", /application\/json/);
	});
});

afterAll(() => server.close());
