let robots = [];

class Robot {
  constructor() {
    this.name = makeid();
    while (robots.indexOf(this.name) >= 0) {
      this.name = makeid();
    }
    robots.push(this.name);
  }
  reset() {
    let oldName = this.name;
    let newName = makeid();
    while (newName === oldName) {
      newName = makeid();
    }
    this.name = newName;
    while (robots.indexOf(this.name) >= 0) {
      this.name = makeid();
    }
    robots.push(this.name);
  }
}

function makeid() {
  var text = "";
  var lets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";

  for( var i=0; i < 2; i++ ) {
    text += lets.charAt(Math.floor(Math.random() * lets.length));
  }

  for (var i = 0; i < 3; i++) {
    text += nums.charAt(Math.floor(Math.random() * nums.length));
  }

  return text;
}

module.exports = Robot;
