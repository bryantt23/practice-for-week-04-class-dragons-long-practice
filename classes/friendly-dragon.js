const Dragon = require('./dragon');
// Your code here// Your code here
class FriendlyDragon extends Dragon {
  static dragons = [];
  constructor(name, color, lifeGoals = [], friend) {
    super(name, color);
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  }
  hasLifeGoals() {
    for (const lifeGoal of this.lifeGoals) {
      console.log(`${this.name} likes to ${lifeGoal}`);
    }
  }
  helpsPeople() {
    return `${this.name} helps their friend ${this.friend}`;
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = FriendlyDragon;
} catch {
  module.exports = null;
}
