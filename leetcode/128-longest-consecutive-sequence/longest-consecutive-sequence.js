
const longestConsecutive = nums => {
    const s = new Set(nums);
    let max = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let l = 1;
        let n;
        
        n = nums[i] - 1;
        while(s.has(n)) {
            l++;
            s.delete(n);
            n--;
        }
        
        n = nums[i] + 1;
        while(s.has(n)) {
            l++;
            s.delete(n);
            n++;
        }
        
        max = Math.max(l, max);
    }
    
    return max;
}
