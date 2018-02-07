import express from 'express';
import morgan from 'morgan';

const app = express();

app.listen(3000, () => {
	console.log('party port is open for buisness');
});
