let barang = ['pulpen' , 'buku', 'klip'];

function indexArray(j) {
for(let index in barang){ 
    if( j == barang[index]){
        return index;
        }
    }
}

console.log(indexArray("buku"))

function indexArray1(ValueArray){
    for (let indeks = 0 ; indeks < barang.length ; indeks ++){
        if ( barang [indeks] == ValueArray  ){
            return indeks;
        }
    }
}
console.log(indexArray1("buku"));