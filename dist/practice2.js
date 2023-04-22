"use strict";
let age;
let name1;
let toggle;
let empty;
let notInitialize;
let callback = (a) => { return 100 + a; };
age = 50;
name1 = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => { return 100 + a; };
let anything;
anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
;
let person;
person = ['Max', 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
const page = {
    load: Status.READY
};
if (page.load === Status.LOADING) {
    console.log('Страница загружается');
}
;
if (page.load === Status.READY) {
    console.log('Страница загружена');
}
;
let data;
let literal;
function showMessage(message) {
    console.log(message);
}
;
function calc(num1, num2) {
    return num1 + num2;
}
;
function customError() {
    throw new Error('Error');
}
;
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
//# sourceMappingURL=practice2.js.map