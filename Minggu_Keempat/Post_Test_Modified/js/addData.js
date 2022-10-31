import { tampilData } from "./tampilData";

function tambahData() {
    let inputNIK = document.getElementById("nik");
    let inputNama = document.getElementById("nama");
    let inputAge = document.getElementById("age");

    let objNIK = inputNIK.value;
    let objNama = inputNama.value;
    let objAge = inputAge.value

    inputNIK.value = ''
    inputNama.value = ''
    inputAge.value = ''

    try{
    (async ()=> {
        const response = await fetch ('http://104.248.154.192:3005/person', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nik: objNIK, nama: objNama, alamat: objAge}),
        });
        const responded = await response.json();
        if (responded.message === "success"){
            alert(`input data ${responded.message}`);
        }
        tampilData();
        })();
    }catch(e){
        console.error(e.message);
    }
}

    // data.push(
    //     {
    //         nik:inputNIK.value,
    //         nama:inputNama.value,
    //         umur:parseInt(inputAge.value),
    //     }
    // );

export {tambahData};