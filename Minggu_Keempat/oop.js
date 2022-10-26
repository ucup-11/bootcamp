class Barang{
    constructor (name , price){
        this.name = name;
        this.price = price;
    }
    detail(){
        return this.name + " " + this.price;
    }
}

const barang1 = new Barang ("laptop" , 12000);
console.log(barang1.name);
console.log(barang1.price);
console.log(barang1.detail());