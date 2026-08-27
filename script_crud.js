const btn_add_task = document.querySelector('.app__button--add-task')
const form_add_task = document.querySelector('.app__form-add-task')
const form_text_area = document.querySelector('.app__form-textarea')

const task_list = []

btn_add_task.addEventListener('click', () => {
    form_add_task.classList.toggle('hidden')
})

form_add_task.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const task = {
        text_input: form_text_area.value
    }
    task_list.push(task)
    localStorage.setItem('tasks', JSON.stringify(task_listgit))
})

