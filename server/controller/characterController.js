/* eslint-disable no-return-assign */
import axios from 'axios';
import { convertCmtoFeet, sortOrder } from '../helpers/utilities';

const getCharacters = async (sort, order, filter) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { status, data } = await axios.get(
    'https://swapi.dev/api/people/',
    config,
  );
  if (status === 200) {
    const sorted = data.results.sort(sortOrder(sort, order));
    const filtered = filter
      ? sorted.filter(
        (res) => res.gender.toUpperCase() === filter.toUpperCase(),
      )
      : sorted;

    // eslint-disable-next-line no-param-reassign
    const heightCalculation = filtered.reduce((acc, res) => (acc += +res.height), 0);

    const heightToFeet = convertCmtoFeet(heightCalculation);
    const characterData = [
      {
        count: filtered.length,
        totalHeightInFt: heightToFeet,
        totalHeightInCM: `${heightCalculation}cm`,
        characters: filtered,
      },
    ];
    return characterData;
  }
  // eslint-disable-next-line no-undef
  throw error;
};

export default {
  getCharacters,
};
