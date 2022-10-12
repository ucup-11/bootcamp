let barang = ['pulpen' , 'buku', 'klip'];


function indexArray(i) {
for(let index in barang){ 
    if( i == barang[index]){
        return index;
        }
    }
}
console.log(indexArray("pulpen"))