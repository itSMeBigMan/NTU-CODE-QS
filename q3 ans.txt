/*
    Task 1:
    - Add a new property "breed" with the value "Poodle"

    Task 2: 
    - Implement a for-in to loop through the keys in "dog" object and print it with console.log()
*/

const dog = {
    petName:"Bobby"
}

// Task 1: const dog = {
    petName:"Bobby",
    breed:"Poodle"
};

// Task 2: const dog = {
    petName:"Bobby",
    breed:"Poodle"
};

 let a = "":
 for (let a in dog){
    a += dog[a] + "";
}
 console.log(a)