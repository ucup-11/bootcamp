let x = 20 ;

function perulangan (){
    for ( i = 1 ; i < x ; i++){
        if (i % 2 === 1){
            console.log(`${i} adalah bilangan ganjil`);
        }else{
            if (i % 2 === 0){
            console.log(`${i} adalah bilangan genap`);
            }
            else {
                console.log('');
            }
        }
    }
 
}
perulangan();