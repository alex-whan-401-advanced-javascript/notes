'use strict';

const minimist = require('minimist');

function Input() {
  // Get the -x style of arguments from the user
  const args = minimist(process.argv.slice(2));
  console.log('MY ARGS:', args);

  // Use the args to create our properties with helper methods
  this.action = this.getAction(args.a); // method argument
  // console.log(args.a);
  this.payload = this.getPayload(args.p);
}

Input.prototype.getAction = function (action = '') {
  let validActions = /add/i;
  return validActions.test(action) ? this.action : console.log('error');
};

// Ternary is seeing if a method was passed in. If it was recognized/validated, it uses that method. If not, it sets it to GET. Tests for "truthiness" of expression on the left. If falsy, expression resolves to item on right (GET)
// The REASON we pass in a GET if no method is selected is to prevent the "test" from breaking - the TEST requires a STRING, and would break if the input passed in was 'undefined'

Input.prototype.getPayload = function (payload = '') {
  let validPayload = /["]\w["]\//i; //searches for any word/strong inside double quotes
  return validPayload.test(payload) ? this.payload : undefined;
};

module.exports = Input;

// From today: returned us an instance with a METHOD and a URL
// For our lab : asking us to return an instance with a METHOD, and a PAYLOAD
// All we're doing today is console logging it out - not storing it
