interface Animal {
    canFly: boolean
    canSwim: boolean
}

// 变可选，可以只赋值部分属性
let animal: Partial<Animal> = {
    canFly: false,
}

interface Person2 {
    name?: string
    age?: number
}

//Required 传入的属性变为必选项
// Property 'age' is missing in type '{ name: string; }' but required in type 'Required<Person>'.
let person2: Required<Person2> = {
    name: 'jacky',
    age: 2
    // 没写 age 属性会提示错误
}

interface Person3 {
    name: string
    age: number
}

//Readonly 属性变为只读选项
let person3: Readonly<Person> = {
    name: 'jacky',
    age: 24,
}
//person3.name = 'jack' // Cannot assign to 'name' because it is a read-only property.

interface DatabaseInfo {
    id: string
}

type DataSource = 'user' | 'detail' | 'list'

//Record 将 K 中所有的属性的值转化为 T 类型
const tmp: Record<DataSource, DatabaseInfo> = {
    user: { id: '1' },
    detail: { id: '2' },
    list: { id: '3' },
}

//Pick 从 T 中取出 一系列 K 的属性
let person4: Pick<Animal, 'canSwim'> = {
    canSwim: true,
}

interface Programmer {
    name: string
    age: number
    isWork: boolean
    isStudy: boolean
}

interface Student {
    name: string
    age: number
    isStudy: boolean
}

//Exclude 将某个类型中属于另一个的类型移除掉
type ExcludeKeys = Exclude<keyof Programmer, keyof Student>

//Extract 从 T 中提取出 U
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">; // -> 'a' | 'c'

//Omit:Pick 和 Exclude 进行组合, 实现忽略对象某些属性功能

// let person5: Pick<Animal, 'canSwim'> = {
//     canSwim: true,
// }

// let person6: Omit<Animal, 'canFly'> = {
//     canSwim: true,
// }

//ReturnType 获取函数返回值类型

function bar(x: string | number): string | number {
    return 'hello'
}
type FooType = ReturnType<typeof bar> // string | number

