
const titleToNumber = s => {
    let k = 1;
    let result = 0;
    
    let idxA = 'A'.charCodeAt(0) - 1;
    
    for (let i = s.length - 1; i >= 0; i--) {
        result += k * (s[i].charCodeAt(0) - idxA);
        k = k * 26;
    }
    
    return result;
}
