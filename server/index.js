const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/items", (req, res) => {
  res.json(data);
});

app.get("/items/:id", (req, res) => {
  const item = data.find(i => i.id == req.params.id);
  res.json(item);
});

app.post("/items", (req, res) => {
  data.push({ id: Date.now(), ...req.body });
  res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on 5000"));