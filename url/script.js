let url = ['http://github.com/carbonfive/raygun', 'http://zombie.fandom.com/wiki/Bites', 'https://www.cnet.com'];
let index = 0;

function getDomainUrl(url) {
    let firstInd = url[index].indexOf('www'), str = '', secondInd = 0;
    if (firstInd == -1) firstInd = ((firstInd = url[index].indexOf('/')) + 2);
    else firstInd+=4;

    secondInd = url[index].indexOf('.com', firstInd);
    
    for(let i = firstInd; i < secondInd; i++) { 
       str += url[index].charAt(i);
    }
    return str;
}

console.log(getDomainUrl(url));







