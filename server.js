import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";

const app = express();
const port = 5100;

const key = "DfDBmgofFwSMdzLNjRAL";
const secret = "KXFRPyshHlGOKidtXcpeJPVpmcebZTUz";

let url = `/database/search?q=&key=DfDBmgofFwSMdzLNjRAL&secret=KXFRPyshHlGOKidtXcpeJPVpmcebZTUz`;

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

app.get("/api/v1/getAllData", async (req, res) => {
  try {
    const url =
      "https://api.discogs.com/database/search?q=&key=DfDBmgofFwSMdzLNjRAL&secret=KXFRPyshHlGOKidtXcpeJPVpmcebZTUz"; // Replace with your actual API URL
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.post("/", (req, res) => {
  console.log("Received JSON data:", req);
  res.status(200).json({ message: "data received", data: req.body });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
