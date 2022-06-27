

const week = [' понедельник', ' вторник', ' среда', ' четверг', ' пятница', ' суббота', ' воскресенье',]
let task2 = document.createElement('div');
document.body.appendChild(task2);
task2.classList.add('.second-task');
let set2 = document.createElement('p')
set2.innerHTML = "Задание 2. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным. "
task2.prepend(set2);

let weekdays
let weekend
for (let index = 0; index < 1; index++) {
    let weekdays = week.slice(0,5);
    // let weekend = week.splice(5,2).join().bold()
    let weekend = week.splice(5,2);   
    // task2.insertAdjacentHTML('beforeend', weekdays + weekend )
    task2.insertAdjacentHTML('beforeend', weekdays + "<span><strong>" + weekend + "</strong></span>" )
    }

    
    