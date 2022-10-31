function editData(i) {
    let editNik = prompt('edit NIK' , nik[i]);
    let editNama = prompt('edit Nama' , nama[i]);
    let editUmur = prompt('edit Umur', age[i]);

    data[i].nik= editNik;
    data[i].nama= editNama;
    data[i].umur= editUmur;
    tampilData();
}

export{editData};