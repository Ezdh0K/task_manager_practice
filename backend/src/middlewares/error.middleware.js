function errorMiddleware(err, req, res, next) {
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      message: 'Срок действия вашей сессии истек. Пожалуйста, войдите в аккаунт заново.'
    });
  }

  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      message: 'Неверный токен доступа. Доступ заблокирован.'
    });
  }

  console.error('Критическая ошибка сервера:', err);

  res.status(err.statusCode || 500).json({
    message: err.message || 'Внутренняя ошибка сервера'
  });
}

module.exports = errorMiddleware;