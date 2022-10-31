function tampilData() {
    try{
    let tBody = document.getElementById("printData");
    
    (async ()=>{
        const response = await fetch ('http://104.248.154.192:3005/person');
        const readData = await response.json();
        const dataUser = readData.data;
        tBody.innerHTML = "";

    for (let i in dataUser){
        let nik = dataUser[i].nik;
        let nama = dataUser[i].nama;
        let alamat = dataUser[i].alamat;
        let btnEdit = "<button class ='btn-edit' href = '#' onclick = 'editData (" + i + ")'>Edit</button>";
        let btnHapus = "<button class = 'btn-hapus' href = '#' onclick = 'deleteData (" + i + ")'>Hapus</button>";
        let tRow = `<tr>
                    <th>${Number(i) + 1}</th>
                    <td>${nik}</td>
                    <td>${nama}</td>
                    <td>${alamat}</td>
                    <td>${btnEdit}</td>
                    <td>${btnHapus}</td>
                    </tr>`;
        
tBody.innerHTML += tRow;
    }
})();
    }catch(e){
        console.error(e.message);
    }
}
export{tampilData};