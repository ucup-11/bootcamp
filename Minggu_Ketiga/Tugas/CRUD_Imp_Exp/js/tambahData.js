function tambahData(data) {
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
    }

    export {tambahData};