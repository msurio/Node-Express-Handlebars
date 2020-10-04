// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function (cb) {
    orm.all("cats", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("cats", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("cats", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function ({ id }, callback) {
    orm.delete("cats", {id: id}, function(result){
      callback(result);
    })
  }
};



// Export the database functions for the controller (catsController.js).
module.exports = cat;
