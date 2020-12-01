const { persons, containsName, updateAge, findName } = require('./helpers');

const controller = {};

controller.containsName = (req, res, next) => {
  const { id } = req.params;
  switch (req.method) {
    case 'POST':
      const { name } = req.body;
      if (containsName(persons, name)) {
        return next({
          log: 'controller.ContainsName: ERROR: User already exists',
          message: {
            error: 'User already exists',
          },
        });
      };
      return next();
    case 'PUT':
      if (containsName(persons, id)) {
        return next();
      } else {
        return next({
          log: 'controller.ContainsName: ERROR: User does not exist',
          status: 404,
          message: {
            error: 'User does not exist',
          },
        });
      };
    case 'GET':
      if (containsName(persons, id)) {
        return next();
      } else {
        return next({
          log: 'controller.ContainsName: ERROR: User does not exist',
          status: 404,
          message: {
            error: 'User does not exist',
          },
        });
      };
    default:
      return next({
        log: 'controller.ContainsName: ERROR: Route not found',
        message: {
          error: 'Route not found',
        },
      });
  };
};

controller.addName = (req, res, next) => {
  persons.push(req.body);
  return next();
};

controller.updateAge = (req, res, next) => {
  const { id } = req.params;
  const { name, age } = req.body;
  if (id === name) {
    updateAge(persons, name, age);
    return next();
  } else {
    return next({
      log: 'controller.updateAge: ERROR: params id and request body name do not match',
      message: {
        error: 'params id and request body name do not match',
      },
    });
  };
};

controller.findName = (req, res, next) => {
  const { id } = req.params;
  const payload = findName(persons, id);
  res.locals.payload = payload;
  return next();
};

module.exports = controller;
