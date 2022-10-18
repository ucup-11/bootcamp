const array = [33,23,5,7,10,20,30,12,37];
primes(array);



function primes(arr){
    var arrayLength = arr.length;
    var primeArray = [];

    function primeNum(arrElement){
        if (arrElement <= 1){
            console.log(arrElement + " is not a valid test number.");
        }
        for (var x = 2; x < arrElement; x++){
            if (arrElement % x === 0){
                return false;
            }
            return true;
        }
    
    }

    for (var y = 0; y <= arrayLength - 1; y++){
        if(primeNum(arr[y])){
            primeArray.push(arr[y]);
        }
    }
    console.log(primeArray);
    }
