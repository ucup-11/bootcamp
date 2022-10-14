const createPersonWithAge = (age , person) => {
    return {...person,age};
};

const person = {
    name: 'Bob'
};

const newPerson = createPersonWithAge(18,person);

console.log({
    person ,
    newPerson
});