
console.log('typescript')

// // 数组
// let arr1: number[] = [1, 2, 3]
// let arr2: Array<number> = [1, 2, 4]
// let arr3: Array<object> = [{}, {}]
// let arr4: Array<number | string> = [1, 2, 4, 'sss']


// // 元组 已知数量和类型
// let arr5: [string, number] = ['1', 1]

// /* 枚举是可以更改他的值的 默认是0开头 */
// enum Color {
//   Red,
//   Green,
//   Blue
// }

// let c: Color = Color.Red

// enum Test {
//   test1 = 1,
//   test2 = "hello"
// }
// let test1: Test = Test.test1
// let test2: string = Test['hello']
// let test3: string = Test[1]
// console.log(test1, test2, test3) // 1 undefined 'test1'    如果是数字的话是可以反向取得的

// // never 类型 抛出错误或者 死循环 永远没有执行终点

// // Object 使用object类型，就可以更好的表示像Object.create这样的API


// // 类型断言 分为两种 当你自己很确定的时候来进行处理

// let someValue: any = 'this is string'
// let stringLength: number = (<string>someValue).length
// let stringLength1: number = (someValue as string).length
// console.log(stringLength, stringLength1)
// console.log('------------------------------------基础类型------------------------------------')




// function printLabel(labeldObj: { label: string }) {
//   console.log(labeldObj.label)
// }
// let myObj = { size: 10, label: 'this is label' }
// printLabel(myObj)  // 此时传入的属性可以多  但是唯独不能少了 label 并且类型也必须匹配


// // 接口   使用接口重写上面的例子
// interface LabeldValue {
//   label: string
// }
// function printLabel1(labeldObj: LabeldValue) {
//   console.log(labeldObj.label)
// }
// let myObj1 = { size: 10, label: 'this is label' }
// printLabel1(myObj1)

// interface LabeldValue1 {  // 通过接口来定义可选数据类型
//   label: string,
//   id?: number
// }

// const labeldValue1: LabeldValue1 = { label: 'ss', id: 1 }

// interface Point { // 定义只读属性，不能被修改
//   readonly id: number,
//   x: number,
//   y: number
// }
// const point: Point = { id: 1, x: 1, y: 2 }

// let arr6: number[] = [1, 2, 3]
// let arr7: ReadonlyArray<number> = [1, 2, 4]  // 定义只读的数组

// arr7 = arr6 as number[]


// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     // Error: Property 'clor' does not exist on type 'SquareConfig'
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }
// /* 
//   // 报错的原因是 如果一个对象字面量存在任何“目标类型”不包含的属性时 
// let mySquare = createSquare({ colour: "red", width: 100 }); */

// let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig)  // 类型断言和 不使用对象自变量都可以绕过检查 但不是最好的解决方法
// let mySquare1 = createSquare(<SquareConfig>{ colour: "red", width: 100 })
// let squareConfig = { colour: "red", width: 100 }
// let mySquare2 = createSquare(squareConfig)
// console.log(mySquare, mySquare1, mySquare2)
// /**
//  *  最好的处理方法是 添加一个字符串索引签名
//  *  interface SquareConfig1
//  */
// interface SquareConfig1 {
//   color?: string;
//   width?: number;
//   [a: string]: any
// }
// function createSquare1(config: SquareConfig1): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     // Error: Property 'clor' does not exist on type 'SquareConfig'
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }
// let mySquare3 = createSquare1({ colour: "red", width: 100 })

// /**
//  * 函数类型
//  */

// interface SearchFunc {
//   (source: string, subString: string): boolean
// }

// let mySearch: SearchFunc = (src: string, sub: string, ): boolean => {
//   let result = src.search(sub)
//   return result > -1
// }

// /**
//  * 可索引的类型
//  */

// interface StringArray {
//   [a: number]: string
// }
// let myArr: StringArray = ['hello', 'world']

// console.log(myArr[1])

// interface StringMap { // 数字索引的类型必须是字符串索引的子类型
//   [name: string]: number | string,
//   [index: number]: string
// }

// let myMap: StringMap = {
//   a: 1,
//   1: '11'
// }

// /**
//  * 类类型
//  * 实现接口
//  */

// interface ClockInterface {
//   currentTime: Date
// }

// class Clock implements ClockInterface {
//   currentTime: Date
//   constructor() {
//     this.currentTime = new Date()
//   }
// }
// console.log(new Clock())

// interface ClockInterface1 {
//   currentTime: Date,
//   setTime(d: Date)
// }
// class Clock1 implements ClockInterface1 {
//   currentTime: Date
//   setTime(d: Date) {
//     this.currentTime = d
//   }
// }



// // interface ClockConstructor {
// //   new(hour: number, minute: number)
// // }

// // class Clock2 implements ClockConstructor {
// //   constructor(h: number, m: number) { }
// // }


// interface ClockConstructor {
//   new(hour: number, minute: number): ClockInterface2
// }
// interface ClockInterface2 {
//   tick()
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface2 {
//   return new ctor(hour, minute)
// }


// class DigitalClock implements ClockInterface2 {
//   constructor(h: number, m: number) { }
//   tick() {
//     throw new Error("Method not implemented.")
//   }
// }

// class AnalogClock implements ClockInterface2 {
//   constructor() { }
//   tick() {
//     throw new Error("Method not implemented.")
//   }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);


// /** 
//  * 继承接口 
//  */

// interface Shape {
//   color: string
// }

// interface Square extends Shape {
//   sideLength: number
// }

// let square: Square = { color: '#fff', sideLength: 10 }

// // 一个借口可以继承多个接口，创建出多个接口的合成接口

// interface PenStroke {
//   penWidth: number
// }

// interface Square1 extends Shape, PenStroke {
//   sideLength: number
// }


// let square1: Square1 = { color: '#fff', sideLength: 10, penWidth: 10 }

// /**
//  * 混合类型
//  */
// interface Counter {
//   (start: string): number,
//   interval: number,
//   reset(): void,
// }

// function getCounter(): Counter {
//   // let counter = function (start: string) { } as Counter
//   let counter = <Counter>function (start: string) { }
//   counter.interval = 123
//   counter.reset = function () { return 111 }
//   return counter
// }


// const counter = getCounter()
// console.log(counter)
// console.dir(counter)

// /**
//  * 类 各种修饰符 默认为 pubilc    private可以继承  但是不能被子类更改或者获取 只能通过继承自父类的方法来对 private的操作
//  * protected 和 private 的使用几乎一致，唯一的区别为 protected 是可以再子类中通过方法来获取的
//  * readonly 只能在声明或者 constructor 中被赋值
//  */

// class Animal {
//   private name: string = 'sss'      // 其实他还是类的实例属性，只是在ts中不让获取了而已
//   constructor(theName: string) {
//     this.name = theName
//   }
// }

// class Rhino extends Animal {
//   constructor() { super("Rhino"); }
// }

// class Employee {
//   private name: string;
//   constructor(theName: string) { this.name = theName; }
// }
// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
// animal = rhino    // 此时的 private 是继承来到，所以被成为是同一个类型，认为是可以赋值的
// // animal = employee  此时是会报错的，因为两个 private 被认为是不同的值

// console.log('--------------------------------------------------------------------')








// class Person {
//   protected name: string;
//   constructor(name: string) { this.name = name; }
// }
// class Employee1 extends Person {
//   private department: string;
//   constructor(name: string, department: string) {
//     super(name)
//     this.department = department;
//   }
//   public getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }


// let howard = new Employee1("Howard", "Sales");


// // console.log(new Person('hello').name) //
// // console.log(howard.name); // 错误

// class A {
//   readonly a: number = 1
//   readonly b: string
//   constructor(bb) {
//     this.b = bb
//   }
// }

// /**
//  *  在 ts 中 如果给 constructor 中的参数增加了限定符，就以为着 这个参数被作为了 累的属性，至于这个属性是什么样的 
//  *  就是限定符的作用
//  */

// class Octopus {
//   readonly numberOfLegs: number = 8;
//   constructor(readonly name: string) {

//   }
// }
// console.log(new Octopus('sss'))

// /**
//  * 存取器  如果只定义了 get 的话 会默认为 readonly 
//  */


// class AA {
//   private _value: string;
//   public get value(): string {
//     return this._value;
//   }
//   public set value(v: string) {
//     this._value = v;
//   }
// }
// const aa = new AA()
// aa.value = '11'
// console.log(aa.value)


// /**
//  * 抽象类 abstract
//  */


// abstract class Department {
//   constructor(public name: string) {
//   }
//   printName(): void {
//     console.log('Department name: ' + this.name);
//   }
//   abstract printMeeting(): void; // 必须在派生类中实现
// }

// class AccountingDepartment extends Department {
//   constructor() {
//     super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//   }
//   printMeeting(): void {
//     console.log('The Accounting Department meets each Monday at 10am.');
//   }

//   generateReports(): void {
//     console.log('Generating accounting reports...');
//   }
// }
// // let department:Department = new Department() // 抽象类无法世界实例化
// // 继承抽象类必须重写抽象类中的所有抽象方法

// class Greeter {
//   static standardGreeting = "Hello, there";
//   greeting: string;
//   greet() {
//     if (this.greeting) {
//       return "Hello, " + this.greeting;
//     }
//     else {
//       return Greeter.standardGreeting;
//     }
//   }
// }

// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());

// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Hey there!";

// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());


// /**
//  * 函数 不确定参数的时候 必须将后面的参数收集起来
//  */
// function buildName(firstName: string, ...restOfName: string[]) {
//   return firstName + " " + restOfName.join(" ");
// }

// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(employeeName)


// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function () {
//     // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


// function identity(arg: number): number {
//   return arg;
// }

// // function identity1(arg: string): any {
// //   return arg;
// // }


// function identity1<T>(args: T): T {
//   return args
// }
// const identityStr = <string>identity1('aaa')



// interface GenericIdentityFn<T> {
//   (arg: T): T
// }
// function identity2<T>(arg: T): T {
//   return arg
// }

// const myIdentity: GenericIdentityFn<string> = identity2

// class GenericNumber<T>{
//   zeroValue: T;
//   add: (x: T, y: T) => T
// }
// let myGenericNumber = new GenericNumber<number>();

// myGenericNumber.zeroValue = 1
// myGenericNumber.add = function (x: number, y: number): number {
//   return x + y
// }
// /**
//  * 对泛型进行约束
//  */
// interface LengthSize {
//   length: number
// }
// function identity3<T extends LengthSize>(arg: T): T {
//   return arg
// }

// identity3('3') // identity3(3) 会报错 



// enum Response1 {
//   No = 0,
//   Yes = 1
// }
// function respond(recipient: string, message: Response1): void {
//   // ...
  
// }

// respond("Princess Caroline", Response1.No)

// window.onmousedown = function(mouseEvent) {
//   console.log(mouseEvent.button);  //<- Error
// };