const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


const app = express();
const Advice = [
	'Go all out!',
	'Take it easy!',
	'Put it off till tomorrow',
	'Seize the day',
	'Set it and forget it'
];

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

app.get('/health', (req, res)=>{
	res.send('healthy');
});

app.get('/', (req, res)=>{
	const randomIndex = Math.floor(Math.random() * Advice.length);
	res.json({advice: Advice[randomIndex]});
});

app.listen(3000, ()=>{
	console.log(`Server started on port 3000`);
});