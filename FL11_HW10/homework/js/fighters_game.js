function Fighter(object) {
	let name = object.name;
	let damage = object.dmg;
	let maxHp = object.hp;
	let currentHp = object.hp;
	let agility = object.agil;
	let wins = 0;
	let losses = 0;
	this.getName = function() {
		return name;
	}
	this.getDamage = function() {
		return dmg;
	}
	this.getHealth = function(amount) {
		if(!arguments.length) {
			return currentHp;
		} else {
			currentHp = amount;
		}
	}
	this.getAgility = function() {
		return agility;
	}
	this.attack = function(defender) {
		let success = Math.floor(1 + Math.random() * 100);
		if (success > defender.getAgility()) {
			let newHp = defender.getHealth() - damage; 
			defender.getHealth(newHp);
			console.log(`${name} make ${damage} damage to ${defender.getName()}`);
		} else {
			console.log(`${defender.getName()} attack missed`)
		}
	}
	this.logCombatHistory = function() {
		console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
	}
	this.heal = function(amount) {
		if (currentHp + amount >= maxHp) {
			currentHp = maxHp;
		} else {
			currentHp += amount;
		}
	}
	this.dealDamage = function(amount) {
		if (currentHp - amount <= 0) {
			currentHp = 0;
		} else {
			currentHp -= amount;
		}
	}
	this.addWin = function() {
		wins++;
	}
	this.addLoss = function() {
		losses++;
	}
}
function battle(enemy1, enemy2) {
	if(!enemy1.getHealth()) {
		console.log(`${enemy1.getName()} is dead and can\`t fight`);
	} else if (!enemy2.getHealth()) {
		console.log(`${enemy2.getName()} is dead and can\`t fight`);
	} else {
		while(enemy1.getHealth() && enemy2.getHealth()) {
			enemy1.attack(enemy2);
			enemy2.attack(enemy1);
		}
		if (!enemy1.getHealth()) {
			enemy2.addWin();
			enemy1.addLoss();
		} else {
			enemy1.addWin();
			enemy2.addLoss();
		}
	}
}
const fighter1 = new Fighter({name: 'John', dmg: 20,  agil: 25, hp: 100});
const fighter2 = new Fighter({name: 'Jim', dmg: 10, agil: 40, hp: 120});
battle(fighter1, fighter2);
fighter1.logCombatHistory();
fighter2.logCombatHistory();
battle(fighter1, fighter2);

console.log(`${fighter1.getHealth()} - John's hp`);
console.log(`${fighter2.getHealth()} - Jim's hp` );

