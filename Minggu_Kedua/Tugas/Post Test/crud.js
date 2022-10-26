let data = [
    {
        nama : 'Ahmad',
        nik: '12435',
        age: 20,
    },
];


function tampil() {
    let tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>NIK</th><th>NAMA</th><th>UMUR</th><th>ACTION</th><th>Sorting</th></tr>";
    for (let i = 0; i < data.length; i++) {
        let btnEdit = "<button class ='btn-edit' href = '#' onclick = 'edit (" + i + ")'>Edit</button>";
        let btnHapus = "<button class = 'btn-hapus' href = '#' onclick = 'hapus (" + i + ")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i].nik + "</td><td>" + data[i].nama + "</td><td>" + data[i].age + "</td><td>" + btnEdit + "" + btnHapus + "</td ></tr > ";
    }
}

function userException(message){
    this.message = message;
    this.name = 'userException'
}
function tambah() {
    let inputNik = document.getElementById("nik");
    let inputNama = document.getElementById("nama");
    let inputAge = document.getElementById("umur");
    let strAlert = [];
    let showAlert = 0;
    if (inputNik =='') {
        strAlert.push('nik');
        showAlert = 1;
    }
    if (inputNama =='') {
        strAlert.push('nama');
        showAlert = 1;
    }
    if (inputAge =='') {
        strAlert.push('umur');
        showAlert = 1;
    }
    if (showAlert) {
        let str = "";
        for (let i in strAlert) {
            str += strAlert[i];
            if (i < strAlert.length-1) {
                str += ', ';
            }
        }
        str += 'cannot be empty!';
        alert(str);
    } else {
        data.push([inputNik.value, inputNama.value, inputNik.value]);
        inputNik.value = '';
        inputNama.value = '';
        inputAge.value = '';

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
// function sortData(order) {
//     isAscending = (order == 'ascending');
//     isDescending = (order == 'descending');

//     for (let i in userData) {
//         let min = 999999;
//         let max = -1;
//         let swapThis = -1;
//         for (let j = i; j < userData.length; j++) {
//             if ((userData[j][0] < min) && (isAscending)) {
//                 min = userData[j][0];
//                 swapThis = j;
//             } else if ((userData[j][0] > max) && (isDescending)) {
//                 max = userData[j][0];
//                 swapThis = j;
//             }
//         }
//         [userData[i], userData[swapThis]] = [userData[swapThis], userData[i]];
//     }

//     printData();
// }   
}
tampil();