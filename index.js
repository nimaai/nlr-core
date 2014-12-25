'use strict';

var timeIntervals = require('./data/data').timeIntervals;

var getDayTimeInMinutes = function (hs, ms) {
  return hs * 60 + ms;
};

var getCurrentTime = function () {
  var currentDate = new Date();
  return [
    currentDate.getHours(),
    currentDate.getMinutes()
  ];
};

exports.getLilaIndex = function () {
  var index, i;
  var currentTime = getCurrentTime();
  var currentHs = currentTime[0];
  var currentMs = currentTime[1];
  var timeNowInMinutes =
    getDayTimeInMinutes(currentHs, currentMs);

  index = 0;
  for (i = index; i < timeIntervals.length; i = i + 1) {
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
