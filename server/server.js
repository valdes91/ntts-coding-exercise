const express = require('express');
const metrics = require('./retrieveMetrics');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/metrics', async (req, res) => {
	try {
		const data = await metrics();
		res.json(data);
	} catch (err) {
		res.send('Info not found');
	}
});

app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`The server is live and running on localhost:${PORT}`);
});
