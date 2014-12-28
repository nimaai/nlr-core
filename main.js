'use strict';

var timeIntervals = require('./data/time-intervals');

var getDayTimeInMinutes = function(hs, ms) {
  return hs * 60 + ms;
};

var getLilaIndex = function(d) {
  var index, i;
  var timeNowInMinutes =
    getDayTimeInMinutes(d.getHours(),
                        d.getMinutes());

  index = 0;
  for (i = index; i < 8; i = i + 1) {
    var bh = timeIntervals[i][0][0]
      , bm = timeIntervals[i][0][1]
      , eh = timeIntervals[i][1][0]
      , em = timeIntervals[i][1][1];

    if (timeNowInMinutes < getDayTimeInMinutes(eh, em)) {
      index = i;
      break;
    }
  }

  return index;
};

// ***************************************************

var sanskritNames = require('./data/sanskrit-names');
var englishNames = require('./data/english-names');
var shortDescriptions = require('./data/short-descriptions');
var rupaDescriptions = require('./data/rupa-descriptions');
var vishvanathDescriptions = require('./data/vishvanath-descriptions');

var longDescriptions = [];
longDescriptions[0] = require('./data/long/nisha');
longDescriptions[1] = require('./data/long/nishanta');
longDescriptions[2] = require('./data/long/prataha');
longDescriptions[3] = require('./data/long/purvahna');
longDescriptions[4] = require('./data/long/madhyahna');
longDescriptions[5] = require('./data/long/aparahna');
longDescriptions[6] = require('./data/long/shayana');
longDescriptions[7] = require('./data/long/pradosha');

// ***************************************************

module.exports = {
  getLilaIndex: getLilaIndex,

  getTimeInterval: function(d) {
    return timeIntervals[getLilaIndex(d)];
  },

  getSanskritName: function(d) {
    return sanskritNames[getLilaIndex(d)];
  },

  getEnglishName: function(d) {
    return englishNames[getLilaIndex(d)];
  },

  getShortDescription: function(d) {
    return shortDescriptions[getLilaIndex(d)];
  },

  getRupaDescription: function(d) {
    return rupaDescriptions[getLilaIndex(d)];
  },

  getVishvanathDescription: function(d) {
    return vishvanathDescriptions[getLilaIndex(d)];
  },

  getLongDescription: function(d) {
    return longDescriptions[getLilaIndex(d)];
  }
}
