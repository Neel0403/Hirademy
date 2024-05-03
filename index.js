import express from "express";
import dbConnect from "./db/dbConnect";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

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
