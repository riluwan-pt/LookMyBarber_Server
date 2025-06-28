import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './modules/user/user.routes';
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './config/swagger';
import barbersRoutes from './modules/barbershop/barbershop.routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/barbershops', barbersRoutes);

export default app;
