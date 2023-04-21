// Задайте правильные ts типы, для классических js

let age: number;
let name1: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback = (a: number) => { return 100 + a };
age = 50;
name1 = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => { return 100 + a };

// Задавайте тип для переменной в которую можно сохранить любое значение

let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом

let some: unknown;
some = 'Text';
let str: string;
if (typeof some === 'string') {
  str = some;
};

// Сделайте неизменяемый массив со строго описанными типами. Массив для примера

let person: [string, number];
person = ['Max', 21];

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY)

enum Status { LOADING, READY };
const page = {
  load: Status.READY
};
if (page.load === Status.LOADING) {
  console.log('Страница загружается');
};
if (page.load === Status.READY) {
  console.log('Страница загружена');
};

// Сделайте переменную, которая может принимать или строку или число

let data: string | number;

//Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'

let literal: 'enable' | 'disable';

// Укажите типы для следующих функций

function showMessage(message: string): void {
  console.log(message);
};
function calc(num1: number, num2: number): number {
  return num1 + num2;
};
function customError(): never {
  throw new Error('Error');
};

// Создайте свой тип данных на основе имеющихся данных

type PageData = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open' | 'close',
  details?: {
    createAt: string,
    updateAt: string,
    // createAt: Date,
    // updateAt: Date,
  }
};

const page1: PageData = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
};

const page2: PageData = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};