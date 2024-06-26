import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) =>  res.send('Hello, World!'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});