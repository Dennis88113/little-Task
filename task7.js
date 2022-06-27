
let set7 = document.createElement('p')
set7.innerHTML = ' Задача 7. Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr(игнорируйте чувствительность к регистру).'
let task7 = document.createElement('div');
task7.prepend(set7);

document.body.append(task7);
task7.classList.add('.seventh-task');

let arr = ["php", "php", "Css", "css",
  "script", "script", "html", "html", "java"];
  let uniqArr = [...new Set(arr.join(',').toLowerCase().split(','))];
  task7.insertAdjacentHTML("beforeend", uniqArr);

//   второй способ
  
  let uniqueArr = (arr.join(',').toLowerCase().split(',')).filter((element, index) => {
    return arr.indexOf(element) === index;
});
console.log(uniqueArr);
