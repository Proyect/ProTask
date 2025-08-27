import 'dotenv/config.js';
import path from 'path';

// Objeto de configuración para cada dialecto
const dialectConfigs = {
  postgres: {
    dialect: 'postgres',
  },
  sqlite: {
    dialect: 'sqlite',
    storage: path.resolve(process.env.DB_STORAGE || 'dev.sqlite'), // Ruta al archivo de la BD
  },
};

// Leemos el dialecto del .env, con 'postgres' como valor por defecto
const dialect = process.env.DB_DIALECT || 'postgres';

export default {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,  
    ...dialectConfigs[dialect], 
  },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,   
        ...dialectConfigs[dialect],     
    },      
};



