import mysql from 'mysql2/promise';
import bluebird from 'bluebird';

export const getConnection = async () => {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'beers_app', // Nom de votre base de données locale
    Promise: bluebird,
  });
};
