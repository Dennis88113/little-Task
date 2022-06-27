

let num = '';
let task5 = document.createElement('div');
document.body.appendChild(task5);
task5.classList.add('.fifth-task');
let button5 = document.createElement("BUTTON");
task5.appendChild(button5);
let set5 = document.createElement('p')
set5.innerHTML = ' Задача 5.Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.'
task5.prepend(set5);
button5.classList.add('.btn');
button5.appendChild(document.createTextNode("Нажми для выполнения задания 5"));
button5.addEventListener("click", function btnclick() {
    let num = prompt('Введите число',)
        function colonOdd (num) {
        let str = num.toString();
        let result = [str[0]];
        for(let i=1; i<str.length; i++) {
            if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
              result.push(':', str[i]);
             }
            else {
              result.push(str[i]);
            }
        }
        return result.join('');  
      }
         
  task5.insertAdjacentHTML('beforeend', (colonOdd(num)));
});



