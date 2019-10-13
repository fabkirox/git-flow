const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('v1 bare1')
});

app.listen(3000, (req, res) => {
  console.log('server on 3000');
});
