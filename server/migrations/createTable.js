/* eslint-disable no-console */
import pool from '../model';

const createTables = `
  CREATE TABLE IF NOT EXISTS comments (
   id SERIAL PRIMARY KEY,
   movie VARCHAR,
   comment VARCHAR,
   commenterIp VARCHAR,
   createdAt TIMESTAMP
  );
`;
const createDatabaseTables = async () => {
  try {
    await pool.query(createTables).then(() => {
      console.log('Tables successfully created');
    });
  } catch (error) {
    console.log(error);
  }
};

createDatabaseTables();
