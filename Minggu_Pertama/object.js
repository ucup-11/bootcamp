const user = {
    Nama : 'Raden Sudirman' ,
    tanggalLahir : '1916-01-24' ,
    tempatlahir : 'Karangjati' , 
    kebangsaan : 'Indonesia' ,
    'Jenis Kelamin'  : 'laki-laki',
    'berat-badan' : '46' ,
    hobi : 'Tidur' ,
    8 : "delapan" ,
    null :  'tipe data null',
    undefined : 'tipe data undefined' ,
    true : 'tipe data boolean' , 
    false : 'tipe data boolean', 
    pahlawan : true ,
};

console.log(`Halo , nama saya ${user.Nama}`);
console.log(`Saya tinggal di ${user.tempatlahir}`);
console.log(`Saya seorang ${user['Jenis Kelamin']}`);
console.log(`Berat badan nya ideal ${user['berat-badan']}`);
console.log(`Hobi nya ${user['hobi']}`);
console.log(`main ke hutan ${user[8]} kali`);