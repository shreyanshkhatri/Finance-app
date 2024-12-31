import express, { Request, Response } from 'express';
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const app = express();
const PORT = 5000;
const excelRoutes = require('./routes/excelRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const morgan = require('morgan');

dotenv.config();
connectDB();
app.use(morgan('tiny'));
// app.use(cors());
const allowedOrigins = [process.env.FRONTEND_URL];
console.log(process.env.FRONTEND_URL);
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow cookies/auth headers if needed
  }),
);

app.use(express.json());
app.use('/api', excelRoutes);
app.use('/api/user', userRoutes);
app.use('/api', transactionRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, '0.0.0.0', () =>
  console.log(`Backend running on port: ${PORT}`),
);
