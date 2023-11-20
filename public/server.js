const express = require('express');
const fs = require('fs')
const path = requite('path')
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});