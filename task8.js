// Задача8.
// Используя функцию из задания 7 напишите функцию union, которая возвращает массив 
// состоящий только из уникальных элементов из каждого массива.

let set8 = document.createElement('p')
let task8 = document.createElement('div');
document.body.append(task8);
set8.innerHTML = 'Задача 8.Используя функцию из задания 7 напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.';
task8.prepend(set8);
task8.classList.add('.eighth-task');

const array1 = [5, 2, 1, -10, 8];
const array2 = [5, 2, 1, -9, 3, 7]; 

let union = function(array1, array2) {
    let unionArr = [];
    let arr = array1.concat(array2);
    for (let element of arr) {
        if (!unionArr.includes(element)) {
            unionArr.push(element);
        }
      }
      return unionArr;
    }

    task8.insertAdjacentHTML("beforeend", union(array1, array2)); // [-10,8,5,2,1,-9,3,7] 




    