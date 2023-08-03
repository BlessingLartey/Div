let fruitSeed = { 
    Banana: 'No seed',
    Mango: 'Seed',
    Pear: 'seed',
    Apple: 'Seed',
};

// let freshFruit_value = Object.values(fruitSeed).sort();
// console.log(freshFruit_value);
// console.log('to sort:', freshFruit_value.sort())

// let freshFruit_keys = Object.keys(fruitSeed);
// console.log(freshFruit_keys);
// console.log('to sort:', freshFruit_keys.sort())

let freshFruit_entries = Object.entries(fruitSeed);
console.log(freshFruit_entries);
console.log('to sort:', freshFruit_entries)
