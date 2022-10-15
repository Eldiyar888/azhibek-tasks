let str = 'some text';

// Поиск и подсчет символа

function getCountSymbol(str) {
    let alp = 'abcdefghijklmnopqrstuvwxyz';
    let count = 0;

    const object = {};

    for(let i = 0; i < alp.length; i++) { 
        for(let j = 0; j < str.length; j++) {
            if (str[j].toLowerCase() == alp[i].toLowerCase()) {
                count++;
                object[str[j]] = count;
            }
        }
        count = 0;
    }
    return object;
}

console.log(getCountSymbol(str));



