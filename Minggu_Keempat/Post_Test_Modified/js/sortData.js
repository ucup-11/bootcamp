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