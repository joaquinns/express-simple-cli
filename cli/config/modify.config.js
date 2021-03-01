export const modifyApp = (routeName) => {
    return `
import { ${routeName} } from './src/routes/${routeName}.route.js'

app.use('/api/${routeName}', userRoutes);
    `;
}