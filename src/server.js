import app from "./app";

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

export { app, server };
