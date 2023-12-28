import "dotenv/config.js";
import express from "express";
import cors from "cors";
import router from "./router.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

//Start the server

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
