'use strict';

const isUrl = require('is-url');
const minimist = require('minimist');

function Input() {
  const args = minimist(process.argv.slice(2));

  this.method = this.getMethod(args.m);
  this.url = this.getURL(args.u);
}

Input.prototype.getMethod = function (method = '') {
  let validMethods = /get|put|patch|post|delete/i;
  return validMethods.test(method) ? method : 'GET';
};

Input.prototype.getURL = function (url = '') {
  return isUrl(url) ? url : undefined;
};

module.exports = Input;
