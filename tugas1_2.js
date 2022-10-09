let matrix4x4 = [
    [1,2,3,4],
    [5,6,7,8],
    [1,2,3,4],
    [5,6,7,8],
]

let temporary = 0 ;

for (let i = 0 ; i < matrix4x4.length ; i++){
    for (let j = 0; j < matrix4x4.length ;j++){
        if (i==j){
        temporary = temporary + matrix4x4[i][j];
        }
        
    }
}
console.log(temporary);