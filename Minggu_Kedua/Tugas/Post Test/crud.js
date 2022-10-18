let nik = [
];

let nama = [
   
];

let umur = [
  
];

function tampil() {
    let tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>NIK</th><th>NAMA</th><th>UMUR</th><th>ACTION</th><th>Sorting</th></tr>";
    for (let i = 0; i < nik.length; i++) {
        let btnEdit = "<button class ='btn-edit' href = '#' onclick = 'edit (" + i + ")'>Edit</button>";
        let btnHapus = "<button class = 'btn-hapus' href = '#' onclick = 'hapus (" + i + ")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + nik[i] + "</td><td>" + nama[i] + "</td><td>" + umur[i] + "</td><td>" + btnEdit + "" + btnHapus + "</td ></tr > ";
    }
}

function tambah() {
    let input1 = document.querySelector("input[name=nik]");
    let input2 = document.querySelector("input[name=nama]");
    let input3 = document.querySelector("input[name=umur]");
    nik.push(input1.value);
    nama.push(input2.value);
    umur.push(input3.value);
    input1.value = "";
    input2.value = "";
    input3.value = "";
    tampil();

}

function edit(id) {
    let baru = prompt("Edit NIK", nik[id]);
    nik[id] = baru;
    baru = prompt("Edit NAMA", nama[id]);
    nama[id] = baru;
    baru = prompt("Edit Umur", umur[id]);
    umur[id] = baru;
    tampil();
}

function hapus(id) {
    nik.pop(id);
    tampil();
}

function sortingData(){
    
}
tampil();