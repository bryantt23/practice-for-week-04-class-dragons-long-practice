// Your code here

const Dragon = require('./dragon');
// Your code here// Your code here
class EvilDragon extends Dragon {
  static dragons = [];
  constructor(name, color, evilDoings = [], nemesis) {
    super(name, color);
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }
  dontInviteThemOverForDinner() {
    for (const evilDoing of this.evilDoings) {
      console.log(`${this.name} will ${evilDoing}`);
    }
  }
  burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = EvilDragon;
} catch {
  module.exports = null;
}
