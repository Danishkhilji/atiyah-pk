const tryCatch = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).send('Internal Server Error');
    }
  };
};

module.exports = tryCatch;