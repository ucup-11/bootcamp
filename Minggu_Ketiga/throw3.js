let json ='{"age": 20}';

try {
    let user = JSON.parse(json);

    if (!user.name){
        throw new SyntaxError("'name' is required");
    }
    console.log(user.name);
    console.log(user.age);
}catch(error){
    console.log(`JSON Error : ${error.message}`);
}