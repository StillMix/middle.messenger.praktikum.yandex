const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config()

const {PORT = 3000} = process.env
 
app.use(express.static(`${__dirname}, "../dist/index.html"`));

app.listen(PORT, () => {
  console.log(`Мой текст в логе после запуска ${PORT}!`);
});