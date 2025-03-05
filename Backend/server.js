import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
})


app.use("/api", router)
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
