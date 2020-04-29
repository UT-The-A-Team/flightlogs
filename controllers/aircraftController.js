//Dependencies
const db = require("../models"); // model objects
// Outputs all aircraft
​

exports.aircraft_list = function (req, res, next) {
  db.Aircraft.find({})
    .then(function (planes) {
      // If any Articles are found, send them to the client
      res.json(planes);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
};
​
exports.aircraft_by_id = function (req, res) {
  res.send('NOT READY: aircraft by id');
};
​
exports.aircraft_by_tail = function (req, res) {
  res.send('NOT READY: aircraft by tail');
};
​
exports.aircraft_create = function (req, res) {
  res.send('NOT READY: aircraft create');
};
​
exports.aircraft_update = function (req, res) {
  res.send('NOT READY: aircraft update');
};
​
exports.aircraft_delete = function (req, res) {
  res.send('NOT READY: aircraft delete');
};
