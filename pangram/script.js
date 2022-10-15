let text = 'The quick brown fox jumps over the lazy dog';

// Панграмма

console.log(IsPangram(text));

function IsPangram(text) {
    let alp = 'abcdefghijklmnopqrstuvwxyz';
    let temp = '';
    let count = 0;

    for (let i = 0; i < alp.length; i++) {
        for (let j = 0; j < text.length; j++) {
            if (alp[i].toLowerCase() == text[j].toLowerCase()) {
                count++;
                if (count == 1) {
                    temp += text[j].toLowerCase();
                }
            }
        }
        count = 0;
    }

    let isEqual = (temp === alp)

    if (isEqual)
        return true;
    else
        return false;
}

