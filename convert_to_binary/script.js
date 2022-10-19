let a = +prompt("Введите десятичное число для преобразования их в двоичную", "")

function convertToBinary(a) {
    return a.toString(2);
}

console.log(convertToBinary(a));

