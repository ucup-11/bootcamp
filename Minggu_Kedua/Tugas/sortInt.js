let arr = [2,4,6,5,1,3];

let sortInt = (arr) => {
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr.length - i -1  ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp 
            }
        }
    }
    console.log(arr);
}

sortInt(arr);