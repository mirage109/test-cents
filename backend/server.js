const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Invalid input.' });
    }

    const result = num1 + num2;

    res.json({ result: result });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
