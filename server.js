import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import artistRouter from "./routes/artistRouter.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware for HTTP request logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Define a route and its handler
app.get("/", (req, res) => {
  res.send("Hello, Express with ES Modules!");
});

app.use("/api/v1/", artistRouter);

// Start the server and listen on the specified port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
