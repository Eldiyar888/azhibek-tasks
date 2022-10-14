let str = 'aabbbbcweqwerq';

let alp = 'abcdefghijklmnopqrstuvwxyz';
let count = 0;

const object = {};

for(let i = 0; i < alp.length; i++) { 
    for(let j = i; j < str.length; j++) {
        if (str[j] == alp[i]) {
            count++;
            object[alp[i]] = count;
        }
    }
}

console.log(object)

