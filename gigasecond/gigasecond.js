class Gigasecond {
  constructor(since) {
    this.since = since;
  }
  date() {
    return new Date(this.since.getTime() + 1000000000000);
  }
}

module.exports = Gigasecond;
