interface myInter{
    name: string;
    sayHello(): void;
}
// 定义类时，可以使类去实现一个接口
// 实现接口就是使类满足接口的要求
class MyClass implements myInter {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHello(){
        // 接口就是就类的限制，定义规范
    }
}

interface FuncWithAttachment {
    (param: string): boolean;
    someProperty: number;
}

const testFunc: FuncWithAttachment = function (param: string) {
    return param.indexOf("Neal") > -1;
};
const result = testFunc("Nealyang"); // 有类型提醒
testFunc.someProperty = 4;

// 声明合并之接口合并
interface Box {
    height: number;
    width: number;
}
interface Box {
    scale: number;
    //width: string;  // 报错，相同名称类型必须相同
}
let box: Box = { height: 5, width: 6, scale: 10 };