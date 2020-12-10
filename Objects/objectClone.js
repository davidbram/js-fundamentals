const _ = require('lodash');

let user = { name: 'John', age: 24, height: '5\'11"', weight: '75kg' };

let admin = user;

admin.name = 'Pete';

// console.log(user);

// Clone 1: shallow copy
let user2 = {};

for(key in user) {
    user2[key] = user[key];
}

user2.age = 22;

// console.log(user);

// Clone 2: shallow copy

let user3 = Object.assign({}, user);

user3.weight = 65;

// console.log(user);

// Clone 3: deep copy

user.address = {
    apartment: 801,
    building: 'Radon',
    society: 'Zircon',
    location: { 
        landmark: 'Behind Phoenix mall',
        pincode: '410016',
        area: {
            city: 'Pune',
            state: 'Maharashtra',
            country: 'India'
        },
    },
}

let user4 = Object.assign({}, user);

user4.address.apartment = 802;

// console.log(user);


let user5 = _.cloneDeep(user);

user5.address.apartment = 911;

console.log(user5.address);

console.log(user.address);
