/* eslint-disable no-return-assign */
import express from 'express';
import publicIp from 'public-ip';
import helperResponse from '../helpers/helperResponse';
import commentController from '../controller/commentController';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await commentController.getComments();
    return helperResponse.requestSuccessful(res, data, 200);
  } catch (error) {
    return helperResponse.checkExpressErrors(res);
  }
});

router.post('/', async (req, res) => {
  const { movie, comment } = req.body;
  const ip = await publicIp.v4();
  if (!movie || !comment) {
    return helperResponse.clientError(res, 'movie and comment is required');
  }
  if (comment.length > 500) {
    return helperResponse.clientError(
      res,
      'comment cannot be more than 500 characters',
    );
  }
  try {
    const data = await commentController.postComment(movie, comment, ip);
    return helperResponse.requestSuccessful(res, data, 201);
  } catch (error) {
    return helperResponse.checkExpressErrors(res);
  }
});

export default router;
