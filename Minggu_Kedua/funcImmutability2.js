const user = {
    firstName: 'Dahlan',
    lastName: 'Sikah',
}
const renameLastNameUser = (newLastName , user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Iskan' , user);
console.log(user);