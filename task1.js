
let task1 = document.createElement('div');
task1.classList.add('.first-task');

const obj = {
    Минск: 'Беларусь',
    Москва: 'Россия',
    Киев: 'Украина'
}
document.body.append(task1);
let set1 = document.createElement('p')
set1.innerHTML = " Задача 1. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'."
task1.prepend(set1);
for (let town in obj) {
    task1.insertAdjacentHTML('beforeend', town +  ' это '  + obj[town] +', ')
  }
  