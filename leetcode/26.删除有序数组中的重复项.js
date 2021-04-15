/*
 * @Description: Do not edit
 * @Author: dongzhiwen
 * @since: 2021-04-15 10:12:40
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-04-15 11:13:42
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  /**
   * 1. 根据题解的思路， 双指针
   * 2. 第一次测试，使用的是临时对象 进行数组去重，此处之所以这样写，是因为没有仔细审题，导致理解偏差
   * 3. 根据问题本身的表述，能够了解到，这个只是取数组的一部分值，只取我们所去重后的那一段有序数组
   * 4. 
   * */ 
  if (nums.length == 0) return 0;
  let index = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[index] !== nums[j]) {
      nums[index + 1] = nums[j]
      index ++
    }
  }
  return index + 1
  
};
// @lc code=end

/**
 * 对于双指针的理解
 * 1. 在很少接触算法的时候，对数组的排序、去重仅限于想办法移除重复的元素或者保证元素的有序
 *    并不会考虑到还有指针的概念在里面
 * 2. 对于双指针，我们可以理解为，对数组进行去重操作时，对单个数组进行排除、去重等操作，
 *    需要自定义下标，和使用数组原始的下标，进行两两对比，所得出的结论
 * 3. 应用场景
 *    a. 数组排序，比如快速排序
 *    b. 有序数组 去重
 *    c. 有序数组，某些元素求和
 *    d. 判断环形链表
 * */ 