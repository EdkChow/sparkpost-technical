const { persons, containsName, updateAge, findName } = require('./helpers');

const controller = {};

// checks if name exists in locally stored 'persons' array
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

// adds payload to locally stored 'persons' array
controller.addName = (req, res, next) => {
  const { age } = req.body;
  if (isNaN(age)) {
    return next({
      log: 'controller.addName: ERROR: age is not a number',
      message: {
        error: 'age is not a number',
      },
    });
  };
  persons.push(req.body);
  return next();
};

// updates the age in the locally stored 'persons' array
controller.updateAge = (req, res, next) => {
  const { id } = req.params;
  const { name, age } = req.body;
  if (id === name && !isNaN(age)) {
    updateAge(persons, name, age);
    return next();
  } else {
    return next({
      log: 'controller.updateAge: ERROR: params id and request body name do not match and/or age is not a number',
      message: {
        error: 'params id and request body name do not match and/or age is not a number',
      },
    });
  };
};

// finds the payload based on the name from the locally stored 'persons' array
controller.findName = (req, res, next) => {
  const { id } = req.params;
  const payload = findName(persons, id);
  if (!payload) {
    return next({
      log: 'controller.findName: ERROR: User not found',
      message: {
        error: 'User not found',
      },
    });
  } else {
    res.locals.payload = payload;
    return next();
  };
};

module.exports = controller;
