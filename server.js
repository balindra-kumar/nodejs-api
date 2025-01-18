const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3306;

app.use(bodyParser.json());

app.use('/api/users', userRoutes);

app.listen(port, ()=>{
    console.log(`Server is listening ${port}`)
})
