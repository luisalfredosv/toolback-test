import express from "express";
import cors from "cors";

import routes from "./routes/index";

const app = express();

// app.use(express.bodyParser());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/iecho", routes.iechoRoutes);

export default app;
