class ClassWithPrivateField {
    privateField;

    constructor(){
        this.privateField = 42;
    }
}

class SubClass extends ClassWithPrivateField{
    #subPrivateField;

    constructor(){
        super();
        this.#subPrivateField = 23 ; 
    }
}

const oops = new SubClass();
console.log(oops);
