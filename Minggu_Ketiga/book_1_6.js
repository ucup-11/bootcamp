// function square(x) {
//     return x * x;
// }

let square = (x) => {
    return x * x ;
}
let square1 = x => x * x ;

square(14);

// function average(x, y) {
//     return (x + y) / 2;
// }
let average=(x, y) => (x + y) / 2;

average(3, 6);

let abs=(x) =>  x > 0 ? x : x === 0 ? 0 : - x;

abs(-5);

// function greater_or_equal(x, y) {
//     return x > y || x === y;
// }

// greater_or_equal(7, 4);

// function greater_or_equal(x, y) {
//     return ! (x < y);
// }

// greater_or_equal(7, 4);

let sqrt_iter=(guess, x) => is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
sqrt_iter(3, 25);

let improve = (guess, x) => average(guess, x / guess);

improve(3, 25);

is_good_enough(1.41, 2);

let sqrt = (x) => sqrt_iter(1, x);

console.log(sqrt(144));

