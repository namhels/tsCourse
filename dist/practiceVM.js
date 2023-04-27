"use strict";
class Typescript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}
class Car {
    constructor(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
}
class Animal {
    constructor() {
        this.voice = '';
        this.color = 'black';
        this.go();
    }
    go() {
        console.log('Go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
cat.setVoice('test');
console.log(cat.color);
class ComponentGeneral {
}
class AppComponent extends ComponentGeneral {
    render() {
        console.log('Component on render');
    }
    info() {
        return 'This is info';
    }
}
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
class MyResponse {
    constructor() {
        this.header = 'response header';
        this.result = 'response result';
    }
}
class MyError {
    constructor() {
        this.header = 'error header';
        this.message = 'error message';
    }
}
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
function setAlertType(type) {
    console.log(type);
}
setAlertType('success');
setAlertType('warning');
const arrayOfNumbers = [1, 1, 2, 3, 5];
const arrayOfStrings = ['Hello', 'Vladilen'];
function reverse(array) {
    return array.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfStrings);
let keyP = 'name';
keyP = 'age';
let u1 = 'name';
//# sourceMappingURL=practiceVM.js.map