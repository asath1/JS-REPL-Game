let readlineSync = require('readline-sync');

console.log("Welcome!");
console.log("There are 3 doors.");
console.log("In one of the doors, there is a cute puppy waiting for his forever home.");
console.log("You will need the key to open the door. The key is hidden. You need to find the key...");
console.log("")
console.log("You will be asked three questions. Please choose wisely to find the key: ")
console.log("")


let keyOptions = ["inside the treasure", "under the bed", "on the roof"];
for (i = 0; i < keyOptions.length; i++) {
    console.log("Is the key: [" + keyOptions[i] + "] ?")
}

let choice = readlineSync.question("Enter your choice: ");
while (!keyOptions.includes(choice)) {
    console.log("You have entered an invalid choice.")
    choice = readlineSync.question("Enter your choice: ");
}

let correctKey = Math.floor(Math.random() * 4); 
if (choice == keyOptions[correctKey]) {
    console.log("\nHere is the key: hurry up! the puppy is waiting for you.\n");
} else {
    console.log("You are unable to find the key. Keep trying!");
    return
}


let puppyDoor = ["door 1", "door 2", "door 3"];
for (i = 0; i < puppyDoor.length; i++) {
    console.log("Is the puppy inside: [" + puppyDoor[i] + "] ?")
}

choice = readlineSync.question("Enter your choice: ");
while (!puppyDoor.includes(choice)) {
    console.log("You have entered an invalid choice.")
    choice = readlineSync.question("Enter your choice: ");
}

let correctDoor = Math.floor(Math.random() * 4); 
if (choice == puppyDoor[correctDoor]) {
    console.log("\nWoof-Woof! Congratulations! You rescued the puppy.\n");
} else {
    console.log("opps! wrong door! puppy is not in here");
    return
}

