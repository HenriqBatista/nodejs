const _ = require('lodash')

const a = [10,11,12,13]
const b = [10,11,12,14]

console.log(_.sortedUniq(a,b))