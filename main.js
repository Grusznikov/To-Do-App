const button = document.getElementById('main_work-submitTask');


button.addEventListener('click', () => {
    const placeTasks = document.querySelector('.main_work-tasks ol');
    const typeTasks = document.querySelector('#main_work-typeTasks').value;
    const addList = document.createElement('li');
    const txt = document.createTextNode(`- ${typeTasks}`);

    if (typeTasks == "") {
        return alert("Pusta wartość");
    }

    addList.appendChild(txt);
    placeTasks.appendChild(addList);
})
