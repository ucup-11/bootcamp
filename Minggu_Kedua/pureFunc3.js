const createPersonWithAge = (age , person) => {
    person.age = age;
    return person;
};

const person = {
    name : 'Bob'
};

const newPerson = createPersonWithAge(18,person);

console.log({
    person,
    newPerson
});

//!purefunction