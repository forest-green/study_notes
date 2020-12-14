# 接口

interface接口定义的数据类型，为必要的参数，如果interface定义的数据不再入参中，则会报错

```javascript
interface testObj{
    param:string,  // 必填参数
    unParam ?: string // 非必填参数
}
```

可选属性有两方面的好处：

1. 对参数进行预定义
2. 可以捕获引用了不存在属性的错误

```javascript
interface test {
    name?:string,
    color?:string
}
function createTest(param:test):{name:string, color: string} {
    if (param.name) {
        ....
    }
    // 此处会抛出异常错误，见下图
    if (param.clor) {
        ....
    }
}
let myTest = createTest({name: 'tony'})
```

![1607927694758](D:\study\javaScript\Object_code\typeScript_Interface_errors.png)

## 只读属性 readonly

对于只读属性，只能在创建时进行更改，这与常量const类似;

两者的却别在于使用场景的不同；当用作属性时，使用readonly;当用作变量时，使用const

```typescript
interface readParam {
    readonly x:string,
    readonly y:string
}
let param:readParam = {
    x: 'test',
    y: 'readonly'
}
// 正常输出
// 当对对象中的值进行更改时，会报错，如下图
param.x = 'change test'
```

![1607928204119](D:\study\javaScript\Object_code\typeScript_interface_readonly.png)

**ReadonlyArray<T>**类型

使用此类型，确保数组创建后不可进行更改

在进行测试时，如果对此类型的数组进行更改时，会提示报错



## 额外的属性检查

