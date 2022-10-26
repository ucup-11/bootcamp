function getErrorInObject(){
    try {
        nonExistentFunction();
    }
    catch (errorVariable){
        const {
            name,message, stack
        } = errorVariable;

        return {
            name,message,stack
        }
        // return {
        //     nama: errorVariable.name,
        //     pesan: errorVariable.message,
        //     susunan: errorVariable.stack
        // }
    }
}

console.log(getErrorInObject());