class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // create a hashmap
        let map = new Map<number, number>();
        // loop through array
        for (let i: number = 0; i < nums.length; i++)
        {
            // find out different value between current and target 
            let diff = target - nums[i]
            // check if diff value exist in map or not -> exist mean we found our two sun
            if (map.has(diff))
            {
                return [map.get(diff), i]
            }
            // add to hashmap
            map.set(nums[i], i)
        }

        return [];
    }
}