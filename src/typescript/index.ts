
// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 4]
let arr3: Array<object> = [{}, {}]
let arr4: Array<number | string> = [1, 2, 4, 'sss']


// 元组 已知数量和类型
let arr5: [string, number] = ['1', 1]

/* 枚举是可以更改他的值的 默认是0开头 */
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Red

enum Test {
  test1 = 1,
  test2 = "hello"
}
let test1: Test = Test.test1
let test2: string = Test['hello']
let test3: string = Test[1]
console.log(test1, test2, test3) // 1 undefined 'test1'    如果是数字的话是可以反向取得的

// never 类型 抛出错误或者 死循环 永远没有执行终点

// Object 使用object类型，就可以更好的表示像Object.create这样的API


// 类型断言 分为两种 当你自己很确定的时候来进行处理

let someValue: any = 'this is string'
let stringLength: number = (<string>someValue).length
let stringLength1: number = (someValue as string).length
console.log(stringLength, stringLength1)
console.log('------------------------------------基础类型------------------------------------')




function printLabel(labeldObj: { label: string }) {
  console.log(labeldObj.label)
}
let myObj = { size: 10, label: 'this is label' }
printLabel(myObj)  // 此时传入的属性可以多  但是唯独不能少了 label 并且类型也必须匹配


// 接口   使用接口重写上面的例子
interface LabeldValue {
  label: string
}
function printLabel1(labeldObj: LabeldValue) {
  console.log(labeldObj.label)
}
let myObj1 = { size: 10, label: 'this is label' }
printLabel1(myObj1)

interface LabeldValue1 {  // 通过接口来定义可选数据类型
  label: string,
  id?: number
}

const labeldValue1: LabeldValue1 = { label: 'ss', id: 1 }

interface Point { // 定义只读属性，不能被修改
  readonly id: number,
  x: number,
  y: number
}
const point: Point = { id: 1, x: 1, y: 2 }

let arr6: number[] = [1, 2, 3]
let arr7: ReadonlyArray<number> = [1, 2, 4]  // 定义只读的数组

arr7 = arr6 as number[]


interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
/* 
  // 报错的原因是 如果一个对象字面量存在任何“目标类型”不包含的属性时 
let mySquare = createSquare({ colour: "red", width: 100 }); */

let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig)  // 类型断言和 不适用对象自变量都可以绕过检查 但不是最好的解决方法
let mySquare1 = createSquare(<SquareConfig>{ colour: "red", width: 100 })
let squareConfig = { colour: "red", width: 100 }
let mySquare2 = createSquare(squareConfig)
console.log(mySquare, mySquare1, mySquare2)
/**
 *  最好的处理方法是 添加一个字符串索引签名
 *  interface SquareConfig1
 */
interface SquareConfig1 {
  color?: string;
  width?: number;
  [a: string]: any
}
function createSquare1(config: SquareConfig1): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare3 = createSquare1({ colour: "red", width: 100 })

/**
 * 函数类型
 */

interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc = (src: string, sub: string, ): boolean => {
  let result = src.search(sub)
  return result > -1
}



