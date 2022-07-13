//for loops
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


//while loops
let a = 0;
while (a < 10){
    a++;
    console.log(a);
}

let b = 10;
while (b > 1){
    b--;
    console.log(b)
}


//do while loops
let c = 1;
do{
    console.log(c);
    c++;
} while (c <= 10);

let d = 10;
do{
    console.log(d);
    d--;
} while (d >= 1);


//array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

// for(let number of numbers){
//     console.log(number);
// }