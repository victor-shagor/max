import pool from "../model";

const dropTables = `
DROP TABLE IF EXISTS comments CASCADE;

`;

const dropDatabase = async () => {
  await pool.query(dropTables).then(() => {
    console.log("Tables successfully removed from Database");
  });
};

dropDatabase();
