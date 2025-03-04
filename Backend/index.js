import express from "express";
import cors from "cors";
import ConnectDB from "./db/index.js";

const app = express();

app.use(cors());
app.use(express.json());

ConnectDB.then(() => {
  app.listen(5000, () => {
    console.log("Server running on PORT 5000");
  });
});
