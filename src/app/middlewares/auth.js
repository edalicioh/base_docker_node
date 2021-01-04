import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) { return res.status(401).json({ error: 'Token not provided' }); }

  const [, token] = authorization.split(' ');

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    req.token = token;

    return next();
  } catch (error) {
    return res.status(401).json({
      error: ['Nao Authrizada'],
    });
  }
};
