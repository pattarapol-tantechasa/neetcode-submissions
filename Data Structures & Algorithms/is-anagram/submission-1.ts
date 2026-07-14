class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length != t.length) return false

        let s_sorted = [...s].sort().join()
        let t_sorted = [...t].sort().join()
        
        if (s_sorted == t_sorted)
        {
            return true;
        }

        return false;

    }
}
