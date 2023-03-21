const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const userRoutes = require('./routes/user.routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRoutes);


connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello from Express.js server!');
});