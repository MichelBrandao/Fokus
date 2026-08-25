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
    html.setAttribute('data-contexto', 'foco')
    banner.setAttribute('src', './imagens/foco.png')
})

btn_curto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src', './imagens/descanso-curto.png')
})

btn_longo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src', './imagens/descanso-longo.png')
})