import express from "express";
import cors from "cors";

import routes from "./routes/index";

const app = express();

// app.use(express.bodyParser());
app.use(cors());

app.use("/iecho", routes.iechoRoutes);

export default app;
