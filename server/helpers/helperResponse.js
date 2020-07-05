const helperResponse = {
  clientError(res, error, status = 400) {
    return res.status(status).json({
      success: false,
      error,
    });
  },

  requestSuccessful(res, payload, status = 200) {
    return res.status(status).json({ data: payload });
  },

  checkExpressErrors(res) {
    res.status(500).json({
      message: 'Something failed, try again later',
      success: false,
    });
    // next();
  },
};

export default helperResponse;
