// ./program/cli.js
function __parser__ (f) {
  return f.toString().
    replace(/^[^\/]+\/\*!?/, '').
    replace(/\*\/[^\/]+$/, '')
}
const cli = __parser__(function () {/*!
API.SenecaJS.REST_API

Usage:
  🔳  service
  🔳  --help
  🔳  --version
*/})
module.exports = cli
