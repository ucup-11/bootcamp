const user = {
    firstName: 'Dahlan',
    lastName: 'Sikah',
}
const renameLastNameUser = (newLastName , user) => {
    return {...user, lastName:newLastName}
}
const newUser = createUserWithNewLastName('Iskan', newUser);
console.log(newUser);
