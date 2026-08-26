const html = document.querySelector('html')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

const botoes = document.querySelectorAll('.app__card-button')
const btn_iniciar = document.querySelector('.app__card-primary-button');
const btn_foco = document.querySelector('.app__card-button--foco')
const btn_curto = document.querySelector('.app__card-button--curto')
const btn_longo = document.querySelector('.app__card-button--longo')

const musica_toggle = document.querySelector('#alternar-musica')
const musica = new Audio('./sons/luna-rise-part-one.mp3')

const timer = document.querySelector('#timer')
const duracao_foco = 1500; 
const duracao_descanso_curto = 300; 
const duracao_descanso_longo = 900;

musica.loop = true
musica_toggle.addEventListener('change', () => {
    if(musica.paused){
        musica.play()
    } else {
        musica.pause()
    }
})

btn_foco.addEventListener('click', () => {
    alterar_contexto('foco')
    btn_foco.classList.add('active')
})

btn_curto.addEventListener('click', () => {
    alterar_contexto('descanso-curto')
    btn_curto.classList.add('active')
})

btn_longo.addEventListener('click', () => {
    alterar_contexto('descanso-longo')
    btn_longo.classList.add('active')
})

function alterar_contexto(contexto) {
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        case "foco": 
            titulo.innerHTML = `
            Otimize sua produtividade,<br />
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `            
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?<br />
            <strong class="app__title-strong">Faça uma pausa curta.</strong>
            `            
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfíce.<br />
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `            
            break;            
        default:
            break;
    }
}