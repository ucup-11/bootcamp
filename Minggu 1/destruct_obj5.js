const profile = {
    firstName : "john",
    lastName : 'Doe',
    age : '18',
}

const {firstName , age , isMale = true}=profile;
console.log(firstName);
console.log(age);
console.log(isMale);