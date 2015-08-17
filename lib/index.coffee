timeIntervals = require('../data/time-intervals')

getDayTimeInMinutes = (hs, ms) -> hs * 60 + ms

exports.getLilaIndex = (d) ->
  timeNowInMinutes =
    getDayTimeInMinutes d.getHours(), d.getMinutes()

  for i in [0..7]
    bh = timeIntervals[i][0][0]
    bm = timeIntervals[i][0][1]
    eh = timeIntervals[i][1][0]
    em = timeIntervals[i][1][1]

    if timeNowInMinutes < getDayTimeInMinutes(eh, em)
      return i
