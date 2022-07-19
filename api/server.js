const express = require('express');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config()

const {PORT = 3000} = process.env

 const dirPath = path.join(__dirname, '../dist');

 const app = express();
app.use(express.static(dirPath));

app.listen(PORT, () => {
  console.log(`Мой текст в логе после запуска ${PORT}!`);
});