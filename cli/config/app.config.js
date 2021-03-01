export const createApp = (routeName) => {
    return `
import express, { json } from 'express'
import { ${routeName} } from './src/routes/${routeName}.route.js'


// Initialization
const app = express();

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/api/${routeName}', userRoutes);

`;
}