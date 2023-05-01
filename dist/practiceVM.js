"use strict";
const rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
const rect2 = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
};
rect2.color = 'black';
const rect3 = {};
const rect4 = {};
const rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea() {
        return this.size.width * this.size.height;
    }
};
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
const membership = Membership.Standard;
const membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
const social = SocialMedia.INSTAGRAM;
console.log(social);
function addV(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty: ', position());
console.log('Two params: ', position(10, 15));
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