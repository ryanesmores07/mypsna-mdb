import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";

const app = express();
const port = 5100;

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

app.post("/", (req, res) => {
  console.log("Received JSON data:", req);
  res.status(200).json({ message: "data received", data: req.body });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
