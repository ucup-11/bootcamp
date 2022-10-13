let barang = ['pulpen' , 'buku', 'klip'];

function indexArray(j) {
for(let index in barang){ 
    if( j == barang[index]){
        return index;
        }
    }
}

console.log(indexArray("buku"))

function indexArray1(j){
    for (let i = 0 ; i < barang.length ; i ++){
        if ( barang [i] == j  ){
            return i;
        }
    }
}
console.log(indexArray1("buku"));