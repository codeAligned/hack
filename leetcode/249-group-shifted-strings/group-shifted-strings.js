
const groupStrings = strings => {
    const grouped = [];
    const aidx = 'a'.charCodeAt(0);
    
    for (const s of strings) {
        const diff = s[0].charCodeAt(0) - aidx;
        
        const rep = [];
        
        for (let i = 0; i < s.length; i++) {
            rep.push((s[i].charCodeAt(0) - diff) % 26); // rotate if needed
        }

        const key = String.fromCharCode.apply(String, rep);
        
        if (!grouped[key]) grouped[key] = [];
        
        grouped[key].push(s);
    }
    
    return Object.values(grouped);
}
