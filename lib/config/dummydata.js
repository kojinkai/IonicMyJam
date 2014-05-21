'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'My Jam User',
    email: 'myjam@myjam.com',
    password: 'test'
  }, function() {
      console.log('finished populating myjam user');
    }
  );
});

Thing.find({}).remove(function() {
  Thing.create({
    name: 'An Amazing thing',
    info: 'Some Amazing Info',
    awesomeness: 10
  }, function() {
      console.log('finished populating myjam Thing');
    }
  );
});
