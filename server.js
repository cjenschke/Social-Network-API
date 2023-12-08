const express = require('express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3000;
const app = express();

db.once('open', () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
