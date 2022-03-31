/* Fighter class definition */
 
/*- a constant `MAX_LIFE = 100`: fighters have 100 max life points

- a `Fighter` class with the properties:
  - name: name of the fighter.
  - strength: will be used to calculate the damage points during an attack.
  - dexterity: will be used to calculate the defense points that will limit the damage received.
  - life: initialized to MAX_LIFE, so they all start with 100 life points.

There would potentially be plenty of other things to add, but that's a good start!*/


const MAX_LIFE = 100

function randomIt (min, max) {
  return Math.floor(Math.random() * (max - min) + min); 
}

class Fighter{
  constructor (name,strength,dexterity){
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  fight(enemy) {
    let damage = randomIt(1, this.strength) - enemy.dexterity;

    if (damage < 0) {
      damage = 0;
    }

    enemy.life = enemy.life - damage;

    if (enemy.life < 0) {
        enemy.life = 0;
    }
  }
}

module.exports = Fighter;

