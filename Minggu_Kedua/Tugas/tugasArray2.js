let arr = [4,5,7,2,3,6,13,15,2,21];

function mod3(){
    let modulus3 = [];
    for( let ar3 of arr){
        if(ar3 % 3 == 0 ){
            modulus3.push(ar3);
        }
    }
    console.log(modulus3);
}
mod3();
