interface TA {
    a: string;
    b: string;
}

type TB = {
    b: number;
    c: number[];
}

type TC = TA | TB;// TC 的 key，包含 ab 或者 bc 即可，当然，包含 bac 也可以
type TD = TA & TB;// TD 的 可以,必须包含 abc

interface A {
    name: string;
    age: number;
    sayName: (name: string) => void
}

interface B {
    name: string;
    gender: string;
    sayGender: (gender: string) => void
}

let a: A & B;

type Form1Type = { name: string; } & { gender: number; }
// 等于 type Form1Type = { name: string; gender: number; }
type Form2Type = { name: string; } | { gender: number; }
// 等于 type Form2Type = { name?: string; gender?: number; }

//let form1: Form1Type = { name: '王五' } // 提示缺少gender参数
let form2: Form2Type = { name: '刘六' } // 验证通过


type Form3Type = { name: string; } & { name?: string; gender: number; }
// 等于 type Form3Type = { name: string; gender: number; }
type Form4Type = { name: string; } | { name?: string; gender: number; }
// 等于 type Form4Type = { name?: string; gender: number; }

//let form3: Form3Type = { gender: 1 } // 提示缺少name参数
let form4: Form4Type = { gender: 1 } // 验证通过


type Form5Type = { name: string; } & { name?: number; gender: number; }
// 等于 type Form5Type = { name: never; gender: number; }
type Form6Type = { name: string; } | { name?: number; gender: number; }
// 等于 type Form6Type = { name?: string | number; gender: number; }

//let form5: Form5Type = { name: '张三', gender: 1 } // 提示name的类型为never，不能进行赋值
let form6: Form6Type = { name: '张三', gender: 1 } // 验证通过