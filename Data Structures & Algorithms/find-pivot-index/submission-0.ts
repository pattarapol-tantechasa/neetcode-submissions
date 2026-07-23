class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        const pref = new Array<number>(nums.length).fill(0);
        const subf = new Array<number>(nums.length).fill(0);
        for (let i: number = 1; i < nums.length; i++) {
            pref[i] = nums[i - 1] + pref[i - 1];
        }
        for (let i:number = nums.length - 2; i >=0; i--) {
            subf[i] = nums[i + 1] + subf[i + 1]
        }

        for (let i: number = 0; i < nums.length; i++) {
            if (pref[i] == subf[i]) return i
        }

        return -1;
    }
}
