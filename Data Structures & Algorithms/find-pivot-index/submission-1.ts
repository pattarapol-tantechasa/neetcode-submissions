class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        let total = 0
        for (let n of nums) total += n

        let pref:number = 0
        for (let i: number = 0; i < nums.length; i++) {
            let subf:number = total - pref - nums[i]
            if (pref === subf) return i 
            pref += nums[i]
        }
        return -1
    }
}
