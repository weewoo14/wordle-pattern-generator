const fs = require("fs");
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


app.get('/data', (req, res) => {
  const wordListData = fs.readFileSync("WordList.txt", "utf-8");
  res.send(wordListData);
});

app.listen(3001, () => console.log("Server running on port 3001"));