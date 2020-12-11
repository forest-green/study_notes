# 对象、类与面向对象流程

1. 对象是一组无序的键值对（或属性）的组合

2. 对象分为**数据属性**和**访问器属性**；二者都有**[[configurable]]**配置属性和**[[Enumerable]]**枚举属性，在通过对象字面量创建对象时，二者默认为true；二者的差异之处在与writable、value和get、set的区别;重要的是**wirtable、value**和**get、set**不能共存；

   ```javascript
   const obj = {
   	a: 1,
   	b: 2,
   	sayType() {
   		console.log(this.a)
   	}
   }
   obj.sayType(); // print 1
   // Object.getOwnPropertyDescriptors(obj) 获取一个对象的所有自身属性的描述符 
   let attributes = Object.getOwnPropertyDescriptors(obj)
   console.log(attributes)
   // print 
   // {
   // 	a: {
   // 		value: 1,
   // 		writable: true,
   // 		enumerable: true,
   // 		configurable: true
   // 	},
   // 	b: {
   // 		value: 2,
   // 		writable: true,
   // 		enumerable: true,
   // 		configurable: true
   // 	},
   // 	sayType: {
   // 		value: [Function: sayType],
   // 		writable: true,
   // 		enumerable: true,
   // 		configurable: true
   // 	}
   // }
   ```

   

   1. **数据属性**: 通过字面量创建的对象，默认为是数据属性的对象，属性为configurable、Enumerable、writable、value；writable默认为true，value是属性的值
   2. **访问器属性**: 与数据属性 的区别之处在于get、set

3. 如果要修改创建对象的默认属性，则通过Object.defineProperty(要修改的对象, 要修改对象的属性, 要修改的默认属性)

   ```javascript
   Object.defineProperty(Object, property, {
       configurable: true,
       Enumerable: true,
       writable: true,
       value: undefined
   })
   // 或者
   Object.defineProperty(Object, property, {
       configurable: true,
       Enumerable: true,
       get() {},
       set() {}
   })
   ```

   其中，Vue 2.x使用Object.defineProperty()来实现的监听对象变动，实现双向绑定；

   如果更改对象的configurable属性为false，则该对象或属性则不可配置，也无法通过object.defineProperty方法变更为true，如果进行更改则会报错

   ```javascript
   Object.defineProperty(obj, 'a', {
   	configurable: false
   })
   let attributes = Object.getOwnPropertyDescriptors(obj)
   console.log(attributes)
   // 尝试变更为true
   try {
   	Object.defineProperty(obj, 'a', {
   		configurable: true
   	})
   
   } catch(err) {
   	console.log(err)
   }
   ```

   

![1607673595268](D:\study\javaScript\Object_code\object_defineProperty_configuable.png)

如果通过Object.defineProperty()方法对对象添加一个属性，且不设置configurable、enumerable、writable时，则这三个配置项均默认为false

```javascript
let obj = {}
Object.defineProperty(obj, 'c', {
	value: 23
})
let attributes = Object.getOwnPropertyDescriptors(obj)
console.log(attributes)
// print
// { c:
//   { value: 23,
//     writable: false,
//     enumerable: false,
//     configurable: false } 
// }
```

**尝试实现MVVM，暂时暂停，阅读至page 208, pdf 233**

