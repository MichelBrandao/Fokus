const btn_add_task = document.querySelector('.app__button--add-task')
const form_add_task = document.querySelector('.app__form-add-task')
const form_text_area = document.querySelector('.app__form-textarea')
const ul_task = document.querySelector('.app__section-task-list')

const task_list = JSON.parse(localStorage.getItem('task_list')) || []

function criar_tarefas(task) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = `
    <svg 
        class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="12" r="12" fill="#FFF"></circle><path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>`

    const paragrafo = document.createElement('p')
    paragrafo.textContent = task.text_input
    paragrafo.classList.add('app__section-task-list-item-description')

    const img_btn = document.createElement('img')
    img_btn.setAttribute('src', './imagens/edit.png')

    const btn = document.createElement('button')
    btn.classList.add('app_button-edit')
    btn.append(img_btn)

    li.append(svg)
    li.append(paragrafo)
    li.append(btn)

    return li
}

btn_add_task.addEventListener('click', () => {
    form_add_task.classList.toggle('hidden')
})

form_add_task.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const task = {
        text_input: form_text_area.value
    }
    task_list.push(task)
    const elemento_tarefa = criar_tarefas(task)
    ul_task.append(elemento_tarefa)
    localStorage.setItem('tasks', JSON.stringify(task_listgit))
    form_text_area.value = ''
    form_add_task.classList.add('hidden')
})

task_list.forEach(element => {
    const elemento_tarefa = criar_tarefas(task)
    ul_task.append(elemento_tarefa)
});