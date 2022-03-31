// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter.js')

const heracles =  new Fighter( "🧔 Heracles", 20, 6);
const lion = new Fighter("🦁 Nemean Lion", 11, 13);
let round = 1

while (heracles.life > 0 && lion.life > 0) {

    heracles.fight(lion);
    lion.fight(heracles);
    round += 1;

    
    console.log(`🕛 Round #${round}`)
    console.log(`${heracles.name} 🗡️  ${lion.name} 💙 ${lion.name}: ${lion.life}`) ;
    console.log(`${lion.name} 🗡️  ${heracles.name} 💙 ${heracles.name}: ${heracles.life}`) ;
}
    console.log("")
     
if (heracles.life === 0) {
    console.log (`💀 ${heracles.name} is dead ` )
    console.log (`🏆 ${lion.name} wins (${lion.life} 💙 )`)
}

if (lion.life === 0){
    console.log (`💀 ${lion.name} is dead ` )
    console.log (`🏆 ${heracles.name} wins (${heracles.life} 💙 )`)
}
