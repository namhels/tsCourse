// ======  types  =========

const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'Typescript']

// Tuple
const contact: [string, number] = ['Vladilen', 1234567]

// Any
let variable: any = 42
// ...
variable = 'New String'
variable = []

// ====
function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('Хайзенберг')

// Never
function throwError(message: string): never {
  throw new Error(message)
}

function infinite(): never {
  while (true) {

  }
}

// Type
type Login = string

const login: Login = 'admin'
// const login2: Login = 2

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true

type SomeType = string | null | undefined

// ======  interfaces  =========

interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '12345',
  size: {
    width: 10,
    height: 5
  }
}

rect2.color = 'black'
// rect2.id = '3232'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// =====================

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

// ==================

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}

// =================

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}



// ======  enum  =========

enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]

console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)

// ======  functions  =========

function addV(a: number, b: number): number {
  return a + b
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase()
}

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

function position(): MyPosition
// function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined }
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() }
  }

  return { x: a, y: b }
}

console.log('Empty: ', position())
// console.log('One param: ', position(42))
console.log('Two params: ', position(10, 15))

// ======  classes  =========

class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4
//
//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) { }
}
// ==============


class Animal {
  protected voice: string = ''
  public color: string = 'black'

  constructor() {
    this.go()
  }

  private go() {
    console.log('Go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)
// cat.voice

// =====================

abstract class ComponentGeneral {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends ComponentGeneral {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info';
  }
}

// ======  guards  =========

function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2)
  }
  return x.trim()
}

class MyResponse {
  header = 'response header'
  result = 'response result'
}

class MyError {
  header = 'error header'
  message = 'error message'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result
    }
  } else {
    return {
      info: res.header + res.message
    }
  }
}

// ===================

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
  console.log(type);
}

setAlertType('success')
setAlertType('warning')

// setAlertType('default')

// ======  generics  =========

const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'Vladilen']


function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)

// ======  operators  =========

interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let keyP: PersonKeys = 'name'
keyP = 'age'

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'


let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id'