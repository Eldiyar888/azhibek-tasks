let a = prompt("Введите десятичное число для преобразования их в двоичную", "")

// Преобразование из десятичной в двоичную

function convertToBinary(a) {
    let b = 0;
    let temp = '';

    while (a >= 1) {
        a = a / 2;
        b = ((a * 2) % 2);
        temp += Math.trunc(Math.floor(b));
    }
    return temp.split("").reverse().join("")
}

console.log(convertToBinary(a));

