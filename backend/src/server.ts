import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { prisma } from "./db/prisma";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Zahlwerk Backend Running 🚀" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
