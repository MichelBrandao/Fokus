const html = document.querySelector('html')
const timer = document.querySelector('#timer')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

const btn_iniciar = document.querySelector('.app__card-primary-button');
const btn_foco = document.querySelector('.app__card-button--foco')
const btn_curto = document.querySelector('.app__card-button--curto')
const btn_longo = document.querySelector('.app__card-button--longo')

const duracao_foco = 1500; 
const duracao_descanso_curto = 300; 
const duracao_descanso_longo = 900;

btn_foco.addEventListener('click', () => {
    alterar_contexto('foco')
})

btn_curto.addEventListener('click', () => {
    alterar_contexto('descanso-curto')
})

btn_longo.addEventListener('click', () => {
    alterar_contexto('descanso-longo')
})

function alterar_contexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
}