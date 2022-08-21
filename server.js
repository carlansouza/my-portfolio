const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/portifolio'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/portifolio/index.html'));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});