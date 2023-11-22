const express = require('express');
const fs = require('fs')
const path = require('path')
const api = require('./routes/index.js');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

const dbPath = path.join(__dirname, 'db', 'db.json');



app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))

);
  

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});