const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

const advice = [
	'Go all out!',
	'Take it easy!',
	'Put it off till tomorrow',
	'Seize the day',
	'Set it and forget it',
	'Put 5 on it!',
	'Meditate on it :)'
];

app.get('/', (req, res)=>{
	res.json({advice: Math.floor(Math.random() * advice.length)});
});

app.get('/health', (req, res)=>{
	res.send('healthy');
});

app.listen(3000, ()=>{
	console.log(`Server started on port 3000`);
});