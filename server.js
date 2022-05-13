import express from 'express';
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, '0.0.0.0', () => {
	console.log(`Example app listening on port ${port}`)
	console.log(`URI ${process.env.ATLAS_URI}`)
})
