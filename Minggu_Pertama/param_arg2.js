const user = {
    id : 24,
    displayName : 'Karen' ,
    fullName : 'Kylo Ren' ,
};

function introduce ({displayName , fullName }){
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);