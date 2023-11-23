// required paths //
const express = require('express');
const fs = require('fs')
const path = require('path')
const api = require('./routes/indexRoute.js');
const app = express();
const PORT = process.env.PORT || 3001;

// middleware to navigate through application //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html'))

);
  
// listening port //
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});