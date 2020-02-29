const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const eventRoute = require('./routes/eventRoute');

require('./db/config');
const insertData = require('./populateDB');

//populating DB
const path = './tedd.csv';
insertData(path)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/event', eventRoute);



app.listen(PORT, () => console.log("Server running at Port:", PORT))