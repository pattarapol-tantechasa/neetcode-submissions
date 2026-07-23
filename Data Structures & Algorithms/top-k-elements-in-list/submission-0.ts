class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let count = new Map<number, number>();
        let bucket = new Array(nums.length + 1);
        let result: number[] = [];

        for (let i: number = 0; i < nums.length; i++) {
            count.set(nums[i], (count.get(nums[i]) || 0) + 1);
        }

        for (let [num, freq] of count) {
            bucket[freq] ??= new Set<number>();
            bucket[freq].add(num);
        }

        for (let i: number = bucket.length - 1; i >= 0; i--) {
            if (bucket[i]) result.push(...bucket[i]);
            if (result.length === k) break;
        }

        return result;
    }
}
