let url = ['http://github.com/carbonfive/raygun', 'http://zombie.fandom.com/wiki/Bites', 'https://www.cnet.com'];
let index = 2;

// Поиск имени из URL

let firstInd = url[index].indexOf('www');
if (firstInd == -1) {
    firstInd = url[index].indexOf('/');
    firstInd += 2;
}
else {
    firstInd+=4;
}

let secondInd = url[index].indexOf('.com', firstInd);

str = '';

for(let i = firstInd; i < secondInd; i++) {
   str += url[index].charAt(i);
}

console.log(str)





