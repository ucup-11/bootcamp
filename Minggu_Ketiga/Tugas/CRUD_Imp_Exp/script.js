import * as tambah from "./js/tambahData.js";
import * as edit from "./js/editData.js";
import * as del from "./js/deleteData.js";
import * as dataObj from "./js/data.js";
import * as sort from "./js/sortData.js";

let btnTambah = document.getElementById("btnTambah");
    btnTambah.addEventListener("click" , () => {
    tambah.tambahData(dataObj.data);
    tampilData(dataObj.data);
});

let btnHapus = document.getElementById("printData");
btnHapus.addEventListener("click", (e) => {
    // console.log(e.srcElement.getAttribute("data-del"));
    if (e.srcElement.hasAttribute("hapusData")){
        let w = e.srcElement.getAttribute("hapusData");
        del.deleteData(w, dataObj.data);
        tampilData(dataObj.data);
    };
});

let btnEdit = document.getElementById('printData');
    btnEdit.addEventListener("click", ()=> {
        edit.editData(dataObj.data);
        tampilData(dataObj.data);
    });


function tampilData(data) {
    let tBody = document.getElementById("printData");
    tBody.innerHTML = "";
    for (let i in data){
        let nik = data[i].nik;
        let nama = data[i].nama;
        let umur = data[i].umur;
        let btnEdit = "<button class ='btn-edit' href = '#' editDat = ${i} >Edit</button>";
        let btnHapus = "<button class = 'btn-hapus' href = '#' hapusData = ${i}>Hapus</button>";
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

tampilData(dataObj.data);
