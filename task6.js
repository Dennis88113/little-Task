let set6 = document.createElement('p')
set6.innerHTML = ' Задача 6. Составьте массив дней недели. С помощью foreach выведите все дни недели, а текущий день выведите курсивом. Текущей день недели должен быть получен с помощью JS класса Date'
let task6 = document.createElement('div');
task6.prepend(set6);
document.body.append(task6);
task6.classList.add('.sixth-task');


const weeks = [' понедельник', ' вторник', ' среда', ' четверг', ' пятница', ' суббота', ' воскресенье',]
    for (let i = 0; i < weeks.length; i++) {
        let dayOfWeek = new Date().getDay()
        if (i === dayOfWeek-1)
        task6.insertAdjacentHTML("beforeend", "<span><i>" + weeks[i] + ',' + "<i></span>");
        else 
        task6.insertAdjacentHTML("beforeend", "<span>" + weeks[i]+ ',' + "</span>");
}


