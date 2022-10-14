const faktorial = start => {
    if(start == 0 ) {
    return 1;
    }else{
    return start * faktorial(start-1)
    };
}

console.log(faktorial(5));