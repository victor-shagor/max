import pool from '../model';

const getComments = async () => {
  const data = await pool.query(
    'SELECT * FROM comments ORDER BY createdat DESC',
  );
  return data.rows;
};

const postComment = async (movie, comment, ip) => {
  const date = new Date();
  const data = await pool.query(
    'INSERT INTO comments (movie, comment, commenterip, createdat) VALUES ($1, $2, $3, $4) RETURNING *',
    [movie, comment, ip, date],
  );
  return data.rows;
};

export default {
  getComments,
  postComment,
};
