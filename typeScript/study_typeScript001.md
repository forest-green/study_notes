# typescript文档通读

使用ts的作用是把js的变量验证，由运行时进行验证调整为编译时验证；

原生的js，是先使用后定义元素的类型；

ts是先定义后使用，即先定义好元素的类型，在进行使用；

核心之一是对值所具有的结构进行类型检查；

## 元组（Tuple）

可以定义一个已知长度、元素的数据类型的数组，顺序是固定的，不可扩展;

如果多数组中某个元素进行修改吗，则必须修改为相同类型的元素

## 枚举（enum)

<u>暂不清楚，枚举使用的意义是啥</u>

## Any

任何类型，跟不使用ts没区别，尽量少用

## Void

主要适用于没有任何返回值的函数，如：

```javascript
function fn():void {}
// 默认返回undefined，如果返回null则会提示报错，返回类型不符
```

对function的返回值进行设置时，需要跟预设的保持一致，否则会报错

## null、undefined

一般来说没啥用，赋予此类型的只能用于操作此类型的值

## Never

永远不会返回值的类型，如：

```javascript
// 异常抛出
function error(message: string):never {
	throw new Error(message)
}
// 死循环
function fn():never {
    while(true) {
        
    }
}
// 推断返回值为never  即抛出异常
function fn() {
    return error('Something failed')
}
```

## Object

定义初始参数为对象object，否则报错；非原始类型

function、[]、{}均可以作为对象进行使用，js中除却基础类型的数据外，其他的都可以使用对象进行描述

```javascript
function fn(param:object) {
    ....
}
```

## 类型断言

使用方法，有两种：

```javascript
// <类型>值
<string>someValue
//值 as 类型
someValue as string
```

**备注：**

1. jsx中只能使用as语法

## 展开

展开运算符，不能展开实例对象上的方法

```javascript
class C = {
    p = 1,
    m () {
        
    }
}
let c = new c()
let clone = {...c}
console.log(clone)
// print
o: {
  "p": 12
} 
```

