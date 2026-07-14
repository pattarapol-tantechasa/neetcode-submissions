class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        
       for (let i: number = 0; i < nums.length; i++)
       {
            let num1 = nums[i];
        for (let j: number = i + 1; j < nums.length; j++)
        {
            let num2 = nums[j]
            if (num1 + num2 == target)
            {
                return [i, j]
            }
        }

       } 

        
    }
}