import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
gti;
const app = express();
app.use(cors());

app.get('/', (req, res) => {
	res.send({ message: 'there is a snake in your boot' });
});

app.listen(3000, () => {
	console.log('party port is open for buisness');
});
