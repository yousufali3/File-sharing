import cors from "cors";
import DBConnection from "./database/db.js";
import express from "express";
import path from "path";
import emailRoutes from "./routes/emailRoute.js";

import router from "./routes/route.js";
const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);

app.use(express.static(path.join(__dirname, "./frontend/dist")));

const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
