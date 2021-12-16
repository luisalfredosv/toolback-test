import express from "express";
import cors from "cors";

import routes from "./routes/index";

const app = express();
const port = 3000;

// app.use(express.bodyParser());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/iecho", routes.iechoRoutes);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
