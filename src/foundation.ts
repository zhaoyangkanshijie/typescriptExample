// 字符串类型声明，单引号/双引号不影响类型推断
let str: string = 'Hello World2';

// 数字类型声明
let num: number = 120;
// 这些值也是合法的数字类型
let nan: number = NaN;
let max: number = Infinity;
let min: number = -Infinity;

// 布尔类型声明
let not: boolean = false;
// Typescript只对结果进行检查，!0最后得到true，因此不会报错
let yep: boolean = !0;

// symbol类型声明
let key: symbol = Symbol('key');

// never类型不能进行赋值
// 执行console.log(never === undefined)，执行结果为true
let never: never;
// 但即使never === undefined，赋值逻辑仍然会报错
//never = undefined;

// unknown
let notSure: unknown = 4;
// void
let unusable: void = undefined;

// 除了never，未开启strictNullChecks时，其他类型变量赋值为null/undefined/void 0不报错
let always: boolean = true;
let isNull: null =  null;
// 不开启strict不会报错
//always = null;
//isNull = undefined;

// 字面量
let color: 'red' | 'blue' | 'black';

// any
let d: any = 3;
d = 'jeskson';