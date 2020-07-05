import axios from 'axios';
import pool from '../model';
import { sortOrder } from '../helpers/utilities';

const getMovies = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const { status, data } = await axios.get(
    'https://swapi.dev/api/films/',
    config,
  );
  if (status === 200) {
    const sorted = data.results.sort(sortOrder('release_date'));
    const comment = await pool.query('SELECT movie FROM comments');

    const commentAccumulator = sorted.reduce((acc, value) => {
      acc[value.title] = 0;
      return acc;
    }, {});

    const commentObject = comment.rows.reduce((acc, value) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const key of Object.keys(acc)) {
        if (value.movie.toUpperCase() === key.toUpperCase()) {
          acc[key] += 1;
        }
      }
      return acc;
    }, commentAccumulator);

    const movieData = sorted.map((res) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const key of Object.keys(commentObject)) {
        if (res.title.toUpperCase() === key.toUpperCase()) {
          // eslint-disable-next-line no-param-reassign
          res = {
            title: res.title,
            openeing_crawl: res.opening_crawl,
            commentCount: commentObject[key],
            date: res.release_date,
          };
        }
      }
      return res;
    });
    return movieData;
  }
  // eslint-disable-next-line no-undef
  throw error;
};

export default {
  getMovies,
};
