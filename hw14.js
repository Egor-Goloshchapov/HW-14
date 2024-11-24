const users = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "Bob", age: 35 }
];

const names = users.map(user => user.name);
console.log(names); 





const users1 = [
    { id: 1, name: "John", eyeColor: "blue", age: 30 },
    { id: 2, name: "Alice", eyeColor: "green", age: 25 },
    { id: 3, name: "Bob", eyeColor: "blue", age: 35 }
];

const filterByEyeColor = (color) => users1.filter(user => user.eyeColor === color);

const blueEyedUsers = filterByEyeColor("blue");
console.log(blueEyedUsers);






const users2 = [
    { id: 1, name: "John", gender: "male", age: 30 },
    { id: 2, name: "Alice", gender: "female", age: 25 },
    { id: 3, name: "Bob", gender: "male", age: 35 }
];

const filterByGender = (gender) => users2
    .filter(user2 => user2.gender === gender)
    .map(user2 => user2.name);

const maleNames = filterByGender("male");
console.log(maleNames);







const users3 = [
    { id: 1, name: "Alice", isActive: true },
    { id: 2, name: "Bob", isActive: false },
    { id: 3, name: "Charlie", isActive: false },
    { id: 4, name: "David", isActive: true },
];

const inactiveUsers = users3.filter(user => !user.isActive);
console.log(inactiveUsers);





const users4 = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
];

const emailToFind = "bob@example.com";
const user = users4.find(user => user.email === emailToFind);
console.log(user);
