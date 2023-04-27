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
  constructor(readonly model: string) {}
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