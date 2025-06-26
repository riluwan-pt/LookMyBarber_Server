import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LookMyBarber API',
      version: '1.0.0',
      description: 'API documentation for LookMyBarber backend',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
      },
    ],
  },
  apis: ['src/modules/**/*.ts'], // points to your route files
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
