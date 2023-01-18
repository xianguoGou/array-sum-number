if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/array-sum-number.min.js')
} else {
  module.exports = require('./dist/array-sum-number.js')
}