import express from 'express';
import helperResponse from '../helpers/helperResponse';
import characterController from '../controller/characterController';

const router = express.Router();

router.get('/', async (req, res) => {
  const { sort, order, filter } = req.query;
  if (sort) {
    if (sort !== 'name' && sort !== 'height') {
      return helperResponse.clientError(res, 'sort can only be name or height');
    }
  }
  if (order) {
    if (order !== 'ascending' && order !== 'descending') {
      return helperResponse.clientError(
        res,
        'order can only be ascending or descending',
      );
    }
  }

  try {
    const data = await characterController.getCharacters(sort, order, filter);
    return helperResponse.requestSuccessful(res, data, 200);
  } catch (error) {
    return helperResponse.checkExpressErrors(res);
  }
});

export default router;
