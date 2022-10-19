let text = 'The quick brown fox jumps over the lazy dog';

function IsPangram(text) {
    let regExp = /([a-z])(?!.*\1)/gi;
    return text.match(regExp).length === 26;
}

console.log(IsPangram(text));
