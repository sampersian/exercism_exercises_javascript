class School {
  constructor() {
    this.students = {};
  }
  roster() {
    for (let student in this.students) {
      this.students[student].sort()
    }
    return this.students;
  }
  add(name, num) {
    if(this.students[num] === undefined) {
      this.students[num] = [];
    }
    this.students[num].push(name)
  }
  grade(num) {
    if (this.students[num] === undefined){
      return [];
    } else {
      return this.students[num].sort();
    }

  }
}

module.exports = School;
