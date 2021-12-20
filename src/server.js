import app from "./app";

const port = 8080;

const server = app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

export { app, server };
