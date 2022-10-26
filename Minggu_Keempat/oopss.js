// class Person{
//     nama = "";
//     umur = "";

// detail(){
//     return `nama saya ${this.nama} umur saya ${this.umur}`; 
//     }
// }

// const orang = new Person();
// orang.nama = " Eko Kunted";
// orang.umur = "91"

// console.log(orang.detail());

class Person1{
    constructor (nama , umur){
        this.nama = nama ;
        this.umur = umur ;
    }

    detail(){
        return `Nama saya ${this.nama} , Umur baru ge ${this.umur}`;
    }
}

// const people = new Person1("Ucup" , "21");
// console.log(people.detail());


//override
class IndonesianPeople extends Person1 {
    constructor(nama,umur,nik){
        super(nama,umur);
        this.nik = nik ;
    }

    show(){
        return this.nik;
    }
    detail(){
        return `Nama saya ${this.nama} , Umur baru ge ${this.umur}. NIK nya ${this.nik}`;
    }
}

// const oranglokal = new IndonesianPeople("ucup", "21","21312454");

// console.log(oranglokal.detail());

class People {
    speak(){
        return "Hallo";
    }
}

class JavaPeople extends People {
    speak(){
        return "Mangga Atuh";
    }
}

const insan = new JavaPeople();
console.log(insan.speak());