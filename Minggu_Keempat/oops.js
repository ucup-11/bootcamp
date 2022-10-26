function person(){
    this.firstName = '';
    this.lastName = '';
    this.sayHello = (name) => {
        console.info(`Hello ${name}, my name is ${this.firstName}`)
    }
}

const eko = new person();
eko.firstName ="eko";
eko.lastName = 'Kun';