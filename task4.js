

let task4 = document.createElement('div');
document.body.appendChild(task4);
let set4 = document.createElement('p')
set4.innerHTML = ' Задача 4. Напишите функцию, которая преобразовывает и объединяет все элементы массива (numbers + strings) в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами (с использованием цикла и без него) Функция должна принимать массив а возвращать строку.'
task4.prepend(set4);
task4.classList.add('.fourth-task');

let str='';
let array = [49,'hi',55,88,'world',79,71,17,0,];
    str = array.join(',');
task4.insertAdjacentHTML('beforeend', str )

