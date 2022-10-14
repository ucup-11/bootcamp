// const fav = ['Seafood', 'Salad' , 'nugget' , 'soup'];
// console.log(fav);

// // const fav = ['Seafood', 'Salad' , 'nugget' , 'soup'];
//  console.log(...fav);

// console.log(fav[0], fav[1], fav[2],fav[3]);

// const fav = ['Seafood', 'Salad' , 'nugget' , 'soup'];
// const others = ['cake' , 'Pie', 'donut'];
// const allFav = [...fav ,...others];
// console.log(allFav);

//spread (...)

//spread Obj

const obj1 = {firstName: 'Obi-wan' , age: 30};
const obj2 = {lastName: 'Kenopbi' , gender : 'M'};

const newArray = {...obj1 , ...obj2};
console.log(newArray);