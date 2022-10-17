let text = 'The quick brown fox jumps over the lazy dog';

function IsPangram(text) {
    let alp = 'abcdefghijklmnopqrstuvwxyz'.toLowerCase();
    let temp = '';
    let count = 0;

    for (let i = 0; i < alp.length; i++) {
        for (let j = 0; j < text.length; j++) {
            if (alp[i] == text[j].toLowerCase()) {
                count++;
                if (count == 1) temp += text[j].toLowerCase();
            }
        }
        count = 0;
    }
    return (temp === alp);
}

console.log(IsPangram(text));
