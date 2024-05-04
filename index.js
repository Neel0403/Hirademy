import express from "express";
import dbConnect from "./db/dbConnect.js";
import dotenv from "dotenv";
import cors from "cors";
import AssistantRoutes from "./routes/assistantRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

// http://localhost:8000/assistant
app.use("/assistant", AssistantRoutes);

const PORT = process.env.PORT || 5000;

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed", error);
  });
