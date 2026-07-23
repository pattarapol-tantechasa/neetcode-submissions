class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // nums = [1,2,3,4]

        const res: number[] = [];
        const left = new Array<number>(nums.length).fill(0); // [0,0,0,0]
        const right = new Array<number>(nums.length).fill(0); // [0,0,0,0]

        left[0] = 1; // [1,0,0,0]
        right[nums.length - 1] = 1; // [0,0,0,1]

        for (let i: number = 1; i < nums.length; i++) {
            // [1,1,2,6]
            left[i] = nums[i - 1] * left[i - 1];
        }

        for (let i: number = nums.length - 2; i >= 0; i--) {
            // [24,12,4,1]
            right[i] = nums[i + 1] * right[i + 1];
        }

        for (let i: number = 0; i < nums.length; i++) {
            // [24,12,8,6]
            res[i] = left[i] * right[i];
        }

        return res;
    }
}
