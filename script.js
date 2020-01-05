// Object literals

const person = {
  firstName: "Tom",
  lastName: 'Brady',
  position: ['Quarter Back', 'Free Agent'],
  age: 43,
  team: 'New England Patriots',
  address: {
    city: "Foxboro",
    state: "MA",
  },

  titles: '6 Super Bowl rings',

  getBirthYear: function () {
    return 2020 - this.age;
  }
}

let val;

val = person;


// Get Specific value

val = person.firstName;
console.log(val);

val = person['lastName'];
console.log(val);

val = person.age;
console.log(val);

val = person.team;
console.log(val);

val = person.position[0];
console.log(val)

val = person.titles;
console.log(val);


val = person.address.city;
console.log(val);

val = person.address.state;
console.log(val);

val = person.getBirthYear();
console.log(val);

// Arrays of Objects

const people = [
  { name: 'Steven', age: 44 },
  { name: 'A. Smith', age: 54 },
  { name: 'Molly Q', age: 40 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}