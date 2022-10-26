let data = [
        {
            nik: '3245',
            nama: 'ucup',
            umur: 21 ,
        }
    ]

function tambahData() {
    let inputNIK = document.getElementById("nik");
    let inputNama = document.getElementById("nama");
    let inputAge = document.getElementById("age");

    data.push(
        {
            nik:inputNIK.value,
            nama:inputNama.value,
            umur:parseInt(inputAge.value),
        }
    );
    tampilData();
    }

function editData(i) {
    let editNik = prompt('edit NIK' , nik[i]);
    let editNama = prompt('edit Nama' , nama[i]);
    let editUmur = prompt('edit Umur', age[i]);

    data[i].nik= editNik;
    data[i].nama= editNama;
    data[i].umur= editUmur;
    tampilData();
}

function deleteData(i) {
    data.splice(i,1);
    tampilData();
}

function tampilData() {
    let tBody = document.getElementById("printData");
    tBody.innerHTML = "";
    for (let i in data){
        let nik = data[i].nik;
        let nama = data[i].nama;
        let umur = data[i].umur;
        let btnEdit = "<button class ='btn-edit' href = '#' onclick = 'editData (" + i + ")'>Edit</button>";
        let btnHapus = "<button class = 'btn-hapus' href = '#' onclick = 'deleteData (" + i + ")'>Hapus</button>";
        let tRow = `<tr>
                    <th>${Number(i) + 1}</th>
                    <td>${nik}</td>
                    <td>${nama}</td>
                    <td>${umur}</td>
                    <td>${btnEdit}</td>
                    <td>${btnHapus}</td>
                    </tr>`;
        
tBody.innerHTML += tRow;
    }
}

function sortData(order) {
    try {
        isAscending = (order == 'ascending');
    isDescending = (order == 'descending');

    for (let i in data) {
        let max = 99999999999999;
        let min = -1;
        let swapThis = -1;
        for (let j = i; j < data.length; j++) {
            if ((data[j].nik < max) && (isAscending)) {
                min = data[j].nik;
                swapThis = j;
            } else if ((data[j].nik > min) && (isDescending)) {
                max = data[j].nik;
                swapThis = j;
            }
        }
        [data[i], data[swapThis]] = [data[swapThis], data[i]];
        }
        tampilData();
    }catch(e){
        console.log(e);
    }
    
}

tampilData();
