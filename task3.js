

let task3 = document.createElement('div');
document.body.appendChild(task3);
let set3 = document.createElement('p')
set3.innerHTML = ' Задача 3. Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.'
task3.prepend(set3);
task3.classList.add('.third-task');

let vegetables = [' Капуста', ' Репа', ' Редиска', ' Морковка'];
const newVegetables =JSON.parse(JSON.stringify(vegetables));

// function arrayClone(arr) {
//     return arr.slice(0);
//    };
//    const newVegetables = arrayClone(vegetables);
task3.insertAdjacentHTML('beforeend', newVegetables )
