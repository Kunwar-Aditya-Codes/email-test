require('dotenv').config();

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', require('./view/mail.view'));

app.listen(PORT, () => {
  console.log(`Server started on PORT:${PORT}`);
});
