const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;


const Contact = require('./routes/Contact/contactus.js');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// Middlewares
app.use(cors());
// Routes
app.use('/api/user/contact', Contact);

if (process.env.NODE_ENV === 'production') {
	app.get('/*', (req, res) => {
		res.sendFile(path.join(__dirname, 'dist', 'index.html'));
	});
}

app.listen(port, () => {
	console.log(`Server Running at ${port}`);
});