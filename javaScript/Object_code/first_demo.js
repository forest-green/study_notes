const obj = {
	a: 1,
	b: 2,
	sayType() {
		console.log(this.a)
	}
}
obj.sayType(); // print 1
// Object.getOwnPropertyDescriptors(obj) 获取一个对象的所有自身属性的描述符 
// let attributes = Object.getOwnPropertyDescriptors(obj)
// console.log(attributes)
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
// 
// Object.defineProperty()  用来修改对象属性的默认特性
// Object.defineProperty(obj, 'a', {
// 	configurable: false
// })
// let attributes = Object.getOwnPropertyDescriptors(obj)
// console.log(attributes)
// 尝试变更为true
// try {
// 	Object.defineProperty(obj, 'a', {
// 		configurable: true
// 	})

// } catch(err) {
// 	console.log(err)
// }
// 
Object.defineProperty(obj, 'c', {
	value: 23
})
let attributes = Object.getOwnPropertyDescriptors(obj)
console.log(attributes)