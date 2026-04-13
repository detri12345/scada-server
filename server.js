const cors = require("cors");
app.use(cors());
const express = require("express");
const app = express();
app.use(cors());

app.use(express.json());

let latestData = {};

app.get("/", (req, res) => {
  res.send("SCADA Server Online 🚀");
});

app.post("/api/data", (req, res) => {
  latestData = req.body;
  res.send({ status: "ok" });
});

app.get("/api/data", (req, res) => {
  res.send(latestData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server jalan di port", PORT);
});
