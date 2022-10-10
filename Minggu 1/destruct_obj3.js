const profile = {
    firstName : 'John',
    lastName : 'Doe',
    age : '18' ,
}

let firstName = 'dimas';
let age = '20';

// inisiasi nilai baru melalui destruct objek 
//re-assign nilai dari object pertama
({firstName , age} = profile);

console.log(firstName);
console.log(age);
