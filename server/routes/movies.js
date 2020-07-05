import express from 'express';
import helperResponse from '../helpers/helperResponse';
import movieController from '../controller/movieController';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await movieController.getMovies();
    return helperResponse.requestSuccessful(res, data, 200);
  } catch (error) {
    return helperResponse.checkExpressErrors(res);
  }
});

export default router;
