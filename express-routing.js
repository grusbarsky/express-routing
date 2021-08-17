const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { numsArray, findMode, findMean, findMedian } = require('./functions');

app.get('/mean', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('must pass a query of comma seperated numbers as a list', 400)
  }
  let strings = req.query.nums.split(',');
  // check if valid number string
  let nums =  numsArray(strings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }


  let result = {
    operation: "mean",
    result: findMean(nums)
  }

  return res.send(result);
});

app.get('/median', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('must pass a query of comma seperated numbers as a list', 400)
  }
  let strings = req.query.nums.split(',');
  // check if valid number string
  let nums =  numsArray(strings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "median",
    result: findMedian(nums)
  }

  return res.send(result);
  
});

app.get('/mode', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('must pass a query of comma seperated numbers as a list', 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = numsArray(strings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mode",
    result: findMode(nums)
  }

  return res.send(result);

 
});

/** general error handler */

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found",404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});