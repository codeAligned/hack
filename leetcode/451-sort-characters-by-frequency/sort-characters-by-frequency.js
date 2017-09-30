
const frequencySort = s => {
    const freq = {};
    const mp = new Map();

    for (const c of s) {
        freq[c] = -~freq[c];
    }

    return s.split('').sort((a, b) => {
        const diff = freq[b] - freq[a];
        return !diff ? (b.charCodeAt(0) - a.charCodeAt(0)) : diff;
    }).join('');
}
