exports.getLilaProgress = (d) ->
  timeIntervals = require('../data/time-intervals')
  getDayTimeInMinutes = require('./time').getDayTimeInMinutes
  i = require('./index').getLilaIndex(d)

  bh = timeIntervals[i][0][0]
  bm = timeIntervals[i][0][1]
  eh = timeIntervals[i][1][0]
  em = timeIntervals[i][1][1]

  timeNowInMinutes =
    getDayTimeInMinutes d.getHours(), d.getMinutes()

  lilaSpanInMinutes =
    getDayTimeInMinutes(eh, em) - getDayTimeInMinutes(bh, bm)

  elapsedTimeInMinutes =
    timeNowInMinutes - getDayTimeInMinutes(bh, bm)

  Math.round((elapsedTimeInMinutes / lilaSpanInMinutes) * 100)
