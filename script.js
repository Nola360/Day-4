// Object literals

const person = {
  firstName: "Tom",
  lastName: 'Brady',
  position: ['Quarter Back', 'Free Agent'],
  age: 43,
  team: 'New England Patriots',
  address: {
    city: "Foxboro",
    state: "MA"
  },

  getBirthYear: function () {
    return 1987;
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