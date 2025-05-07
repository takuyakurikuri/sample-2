let tasks = [];

renderTasks = () => {
    const taskList = document.querySelector('#task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => { 
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick = "deleteTask(${index})">削除</button>
        `;
        taskList.appendChild(li);
    });
}

document.querySelector('#add-task').addEventListener('click', () => {
    const title = document.querySelector('#new-task').value.trim();
    if (!title) return;
    tasks.push(title);
    document.querySelector('#new-task').value = '';
    renderTasks();
});

deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();