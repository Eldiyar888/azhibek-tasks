let a = prompt("Введите десятичное число для преобразования их в двоичную", "")

// Преобразование из десятичной в двоичную

let b = 0;
let arr = []
let revArr = []

while(a >= 1) {
    a = a / 2;
    b = ((a * 2) % 2)
    arr.push(Math.trunc(Math.floor(b)));
}

for(let i = arr.length; i >= 0; i--) {
    revArr.push(arr[i])
}

console.log(revArr)
