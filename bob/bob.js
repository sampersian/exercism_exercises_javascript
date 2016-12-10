//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  let content = input.substring(0, input.length-1);
  let last = input[input.length-1];
  if (input.length === 0 || isSilent(input)) {
    return "Fine. Be that way!"
  }

  if (input.toUpperCase() === input) {
    if (isAllNumbers(getRidOfCommas(getRidOfSpaces(content))) && isQuestion(input)) {
      return "Sure.";
    } else if (isAllNumbers(getRidOfCommas(getRidOfSpaces(input)))) {
      return 'Whatever.';
    } else {
      return 'Whoa, chill out!';
    }
  }

  if (isQuestion(input)) return "Sure.";


  return 'Whatever.'
};

function isSilent(str) {
  for (let item of str.split("")) {
    if (item !== " ") {
      return false;
    }
  }
  return true;
}

function isQuestion(str) {
  if (str[str.length-1] === '?') {
    return true;
  } else {
    return false;
  }
}

function getRidOfSpaces(str) {
  return str.split(" ").join("");
}

function getRidOfCommas(str) {
  return str.split(",").join("");
}

function isAllNumbers(str) {
  for (let item of str.split("")) {
    if (isNaN(item)) {
      return false;
    }
  }
  return true;
}

module.exports = Bob;
