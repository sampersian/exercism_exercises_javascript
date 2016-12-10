class SpaceAge {
  constructor(num) {
    this.seconds = num;
    this.earthAge = this.seconds/31557600
  }
  onEarth() {
    return Number(this.earthAge.toFixed(2));
  }
  onMercury() {
    return Number((this.earthAge / 0.2408467).toFixed(2));
  }
  onVenus() {
    return Number((this.earthAge / 0.61519726).toFixed(2));
  }
  onMars() {
    return Number((this.earthAge / 1.8808158).toFixed(2));
  }
  onJupiter() {
    return Number((this.earthAge / 11.862615).toFixed(2));
  }
  onSaturn() {
    return Number((this.earthAge / 29.447498).toFixed(2));
  }
  onUranus() {
    return Number((this.earthAge / 84.016846).toFixed(2));
  }
  onNeptune() {
    return Number((this.earthAge / 164.79132).toFixed(2));
  }
}

module.exports = SpaceAge;
