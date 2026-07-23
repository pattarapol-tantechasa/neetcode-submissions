class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const res = new Array<number>(nums.length).fill(0);
        res[0] = 1;

        for (let i: number = 1; i < nums.length; i++) {
            res[i] = nums[i - 1] * res[i - 1];
        }

        let rightPro: number = 1;
        for (let i: number = nums.length - 1; i >= 0; i--) {
            res[i] = res[i] * rightPro;
            rightPro = rightPro * nums[i];
        }

        return res;
    }
}
