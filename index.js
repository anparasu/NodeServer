import express from 'express';
import routes from './src/routes/nsRoutes';

const app = express();
const PORT = 4040;

routes(app);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});