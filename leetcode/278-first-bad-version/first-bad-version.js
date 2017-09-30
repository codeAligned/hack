
const solution = isBadVersion => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return n => {
        let start = 1;
        let end = n;
        
        while (start < end) {
            const mid = start + Math.floor((end - start) / 2);
            
            if (!isBadVersion(mid)) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        
        return start;
    }
}
