import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import resourceRoutes from './routes/resourceRoutes';
import gameRoutes from './routes/gameRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/resources', resourceRoutes);
app.use('/api/games', gameRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});