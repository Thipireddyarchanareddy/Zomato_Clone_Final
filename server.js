const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Delicious Food Delivery API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});