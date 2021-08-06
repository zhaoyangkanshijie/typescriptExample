abstract class Animal{
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // 定义一个抽象方法
    // 抽象方法使用abstract开头，没有方法体
    // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract sayHello():void;
}
class Dog extends Animal{
    age: number;
    constructor(name: string, age: number){
        // 如果在子类中写了构造函数，在子类构造函数中必须对父类引用
        super(name); // 调用父类的构造函数
        this.age = age;
    }
    sayHello() {
        // 在类的方法中 super 就表示当前类的父类
        // super.sayHello();
    }
    bark() {
        alert('bark');
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this.name);
    }
}
class Dog2 {
    name: string;
    age: number;

    // constructor 被称为构造函数
    // 构造函数会在对象创建时调用
    constructor(name: string, age: number) {
        // 在实例方法中，this就表示当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = name;
        this.age = age;
    }
    bark() {
        alert('bark');
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this.name);
    }
}

