const express = require('express');
const controller = require('./controller/controller');

const app = express();

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 8000;

// API routes
app.post('/sparkpost', controller.containsName, controller.addName, (req, res) => {
  res.status(200).json(req.body);
});

app.put('/sparkpost/:id', controller.containsName, controller.updateAge, (req, res) => {
  res.status(200).json(req.body);
});

app.get('/sparkpost/:id', controller.containsName, controller.findName, (req, res) => {
  res.status(200).json(res.locals.payload);
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Route not found'));

// express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error has occurred' },
  };
  const errorObj = {...defaultErr, ...err};
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

// starts server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
