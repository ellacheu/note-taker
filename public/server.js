const express = require('express');
const fs = require('fs')
const path = requite('path')
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const dbPath = path.join(__dirname, 'db', 'db.json');

const readNotes = () => {
    try {
        const dbData = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(dbData);
    } catch (error) {
        console.error('Error reading from database', error);
        return [];
    }
};



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});