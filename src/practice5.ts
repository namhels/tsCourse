// Есть функция которая возвращает Promise, он возвращает массив строк и чисел, опишите правильно тип

function getPromise () {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise ()
.then((data) => {
  console.log(data);
});