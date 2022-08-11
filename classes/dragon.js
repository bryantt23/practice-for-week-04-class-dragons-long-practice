// Your code here
class Dragon {
  static dragons = [];
  constructor(name, color) {
    this.name = name;
    this.color = color;
    if (!Dragon.dragons.some(name => name === this.name)) {
      Dragon.dragons.push(this.name);
    }
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
  static getDragons() {
    return Dragon.dragons;
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
