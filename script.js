const person_1 = {
  firstName: "Patrick",
  lastName: "Nsengiyumva",
  age: 24,
  isMarried: false
};

// Hello, My name is Patrick, I am 24 years old and is not married

let text = `Hello, My name is ${person_1.firstName}, I am ${person_1.age} old and ${person_1.isMarried ? '' : 'not'} married`
console.log(text);