const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: 'CI' });
});

const server = app.listen(3000, () => console.log("Server running"));
module.exports = {app,server};