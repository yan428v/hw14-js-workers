const persons = [];
let inputData = prompt('Enter person data by "," or type "exit" to finish:');

while (inputData !== "exit") {
    getNewPerson(inputData);
    inputData = prompt('Enter person data by "," or type "exit" to finish:');
}

printPersons(persons);
printStats(persons);

function printStats(obj) {
    let minAge = obj[0].age;
    let maxAge = obj[0].age;
    let averageAge = 0;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].age > maxAge)
            maxAge = obj[i].age;
        if (obj[i].age < minAge)
            minAge = obj[i].age;
        averageAge = averageAge + +(obj[i].age);
    }
    console.log(minAge);
    console.log(maxAge);
    console.log(averageAge / obj.length);
    // return `${minAge} ${maxAge} ${averageAge / obj.length}`
}

function getNewPerson(str) {
    let data = str.split(",");
    const pers = new Person(data[0], data[1], data[2], data[3]);
    persons.push(pers);
    return pers;
}

function printPersons(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = () => `${this.firstName} ${this.lastName}`
}