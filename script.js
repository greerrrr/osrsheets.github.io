class Player {
    constructor() {
        this.honor = "Lady";
        this.firstname = "Klumdrum";
        this.lastname = "Bumblebutt";
        ["str", "dex", "will"].forEach(stat => {
            this[stat] = roll(3, 6, 0);
        });
        this.hp = roll(1, 6, 0);
        this.hand = null;
        this.inventory = starter_package(Math.max(this.str, this.dex, this.will), this.hp);
    }

    print() {
        console.log(this.honor + " " + this.firstname + " " + this.lastname);
        console.log("=== Stats ===");
        console.log(" Str | " + this.str);
        console.log(" Dex | " + this.dex);
        console.log("Will | " + this.will);
        console.log("  HP | " + this.hp);
        console.log(this.inventory);
    }

    addToInv(itemName) {
        if (this.inventory.length < 12) {
            this.inventory.push(itemName);
        } else {
            console.log("Not enough space - couldn't add " + itemName);
        }
    }
    removeFromInv(itemName) {
        for (i=0; i<12; i++) {
            if (this.inventory[i] === itemName) {
                console.log("Removed: " + this.inventory.splice(i, 1));
                return;
            }
        }
        console.log("Not found.");
    }
}

function roll(num, die, mod) {
    let out = 0;
    for (i=0; i<num; i++) {
        out += randBetween(1, die);
    }
    return out + mod;
}

function starter_package(max, hp) {
    return ["Pistol (d6)", "Ether", "Poison", "Arcanum"]
}

function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var p = new Player();
p.print();
p.removeFromInv("Ether");