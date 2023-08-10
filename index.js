const taskInput = document.getElementById('taskInput')
// const taskTime = document.getElementById('taskTime')
const taskList = document.getElementById('taskList')
const addButton = document.getElementById('addButton')

const addTask = ()=>{
    const addText = taskInput.value;

    let timepic;

    timepic = document.createElement('input')
    timepic.setAttribute('type', 'time')
    timepic.setAttribute('class', 'addTime')
    const addTime = taskTime.value;

    if (addText.trim() !== '') {
        const taskItem = document.createElement('li');

        const dateTime = new Date().toLocaleDateString('en-Us', { 
            year:"numeric",
            month:'short',
            day:'numeric',
            weekday:'short'
         });

        taskItem.innerHTML = `${addText} ${dateTime} | ${addTime}`;
        taskList.appendChild(taskItem);
        timepic.append(taskItem)
        taskInput.value = '';

    }
}

addButton.addEventListener('click', addTask);

taskList.addEventListener('click', (event)=>{
    if (event.target.tagName =='LI') {
        // alert("Opps is all your taks please try again, yes trust me you can make it ");

        event.target.classList.toggle('visible');
    }
})
