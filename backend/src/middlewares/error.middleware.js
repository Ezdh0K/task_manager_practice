function errorMiddleware(err, req, res, next) {
  console.error(err);

  res.status(500 || err.statusCode).json({
    message: err.message
  });
}

module.exports = errorMiddleware;