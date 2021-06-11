const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded( {extended: true}));
app.use(express.json());

app.get('/', (req, res) =>res.sendFile(path.join(__dirname, 'view.html')));

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});

