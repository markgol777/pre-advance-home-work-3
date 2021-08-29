function CoffeeeMake (on, off) {
    this.on = on;
    this.off = off;
}

function Coffe (on, off, type, hasMilk, cheap) {
    __proto__: CoffeeeMake;
    CoffeeeMake.call(this, on, off);
    this.type = type;
    this.hasMilk = hasMilk;
    this.cheap = cheap;
}

let coffee1 = new Coffe(true, false, 'капельна', 'no', 'yes');
let coffee2 = new Coffe(true, false, 'ріжкова', 'yes', 'no');
let coffee3 = new Coffe(false, true, 'каво-машина', 'yes', 'yes');

console.log(coffee1);
console.log(coffee2);
console.log(coffee3);