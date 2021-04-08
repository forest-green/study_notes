/*
 * @Description: 类型判断
 * @Author: dongzhiwen
 * @since: 2021-04-02 10:42:39
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-04-02 10:55:06
 */

/**
 * Object 调用constructor属性中的toString方法，把当前对象类型转换为字符串
 * toString方法 返回对象的字符串表示，如'[Object Object]'
 * number类型的也含有toString方法  
 * null undefined没有toString方法，所咦返回其字面量文本
 * */  
function typeOf(obj) {
  let result = Object.prototype.toString.call(obj).split(' ')[1]
  result = result.substring(0, result.length - 1).toLowerCase()
  return result
}

typeOf([])        // 'array'
typeOf({})        // 'object'
typeOf(new Date)  // 'date'
typeOf(function name(params) {})  // 'function'
typeOf(123)  // 'number'
typeOf('23')  // 'string'
typeOf(null)  // 'null'
typeOf(undefined)  // 'undefined'
