// 数组类型有Array<T>和T[]两种写法
let arr1: Array<number> = [1]
let arr2: number[] = [2]

// 未开启strictNullChecks时，赋值为null/undefined/void 0不报错
// let arr3: number[] = null
// // 编译时不会报错，运行时报错
// arr3.push(1)

// tuple
let x: [string, number];
x = ["hello", 10];

// 元组类型
// 坐标表示
let coordiate: [ number, number ] = [114.256429,22.724147]

// 其他引用数据类型
let date: Date = new Date()
let pattern: RegExp = /\w/gi

// 类型声明在函数中的简单运用
// 函数表达式的写法
function fullName(firstName: string, lastName: string): string {
return firstName + ' ' + lastName
}
// 函数声明式的写法
const sayHello = (fullName: string): void => alert(`Hello, ${ fullName }`)

// 当你不知道函数的返回值，但又不想用any/unknown的时候可以试试这种类型声明的写法，不过不推荐
const sayHey: Function = (fullName: string) => alert(`Hey, ${ fullName }`)

// 赋值给数字不会报错
let one: Object = 1
// 也赋值给数组,但无法使用数组的push方法
let arr: Object = []
// 会报错
//arr.push(1)

// 赋值会报错
//let two: object = 2

// object作为类型声明时，赋值给对象时不会报错
let obj1: object = {}
let obj2: object = { name: '王五' } 
let Obj3: Object = {}

// 会报错
// obj1.name = '张三'
// obj1.toString()
// obj2.name

// 不会报错
//Obj3.name = '李四'
Obj3.toString()

// {} 等同于匿名形式的type
type UserType = { name: string; }

let user: UserType = { name: '李四' }
let data: { name: string; } = { name: '张三' }