const Character = require("./Character");

const Potion = require("./Potion");

class Enemy extends Character {
  constructor(name, weapon) {
    super(name);
    this.health = this.health - 10;
    this.strength = this.strength - 2;
    this.agility = this.agility -2;
    this.weapon = weapon;
    this.potion = new Potion();
  }

  getDescription() {
    return `A ${this.name} wielding a ${this.weapon} has appeared!`;
  }
}

// function Enemy(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//     this.potion = new Potion();

//     this.health = Math.floor(Math.random() * 10 + 85);
//     this.strength = Math.floor(Math.random() * 5 + 5);
//     this.agility = Math.floor(Math.random() * 5 + 5);

//     // console.log(this)
// }

// Enemy.prototype = Object.create(Character.prototype)

// Enemy.prototype.getDescription = function() {
//     return `A ${this.name} wielding a ${this.weapon} has appeared!`
// };

module.exports = Enemy;
