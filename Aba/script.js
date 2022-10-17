let str = 'some text';

function getCountSymbol(str) {
    let alp = 'abcdefghijklmnopqrstuvwxyz'.toLowerCase(), count = 0, object = {};
    for(let i = 0; i < alp.length; i++) { 
        for(let j = 0; j < str.length; j++) {
            if (str[j].toLowerCase() == alp[i]) object[str[j]] = count+=1; 
        }
        count = 0;
    }
    return object;
}

console.log(getCountSymbol(str));



