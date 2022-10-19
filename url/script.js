function getDomainUrl(url) {
    let firstInd = url.indexOf('www'), str = '';

    if (firstInd == -1) firstInd = ((firstInd = url.indexOf('/')) + 2);
    else firstInd+=4; 

    for(let i = firstInd; i < url.indexOf('.', firstInd); i++) { 
       str += url.charAt(i);
    }
    return str;
}

console.log(getDomainUrl('http://github.com/carbonfive/raygun'));
console.log(getDomainUrl('http://www.zombie-bites.ru'));
console.log(getDomainUrl('https://www.cnet.com'));







