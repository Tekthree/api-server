'use strcit';

//logs request method and path to console
module.exports = (req, res, next) => {
  console.log(req.method, req.path);

  next();
};