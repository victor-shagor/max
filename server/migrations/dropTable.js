/* eslint-disable no-console */
import pool from '../model';

const dropTables = `
DROP TABLE IF EXISTS comments CASCADE;

`;

const dropDatabase = async () => {
  try {
    await pool.query(dropTables).then(() => {
      console.log('Tables successfully removed from Database');
    });
  } catch (error) {
    console.log(error);
  }
};

dropDatabase();
