let str = 'some text';

function getCountSymbol(str) {
    let object = {};
    for(let i = 0; i < str.length; i++) {
        if (str[i] in object) {
            object[str[i]]++;
            continue;
        }
        object[str[i]] = 1;
    }
    return object;
}

console.log(getCountSymbol(str));



