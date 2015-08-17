getLilaProgress = require('../lib/progress').getLilaProgress

testLilaProgress = (h, m) ->
  d = new Date(null, null, null, h, m)
  getLilaProgress(d)

exports.testLilaProgress = (test) ->
  test.expect(1)
  test.strictEqual(testLilaProgress(7, 12), 50)
  test.done()
