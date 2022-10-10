var foo = 1;
function bar(){
    if (!foo){
        foo = 10;
    }
    console.log(foo);
}
bar();