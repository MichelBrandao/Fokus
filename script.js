const html = document.querySelector('html')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const btn_foco = document.querySelector('.app__card-button--foco')
const btn_curto = document.querySelector('.app__card-button--curto')
const btn_longo = document.querySelector('.app__card-button--longo')

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

const musica_toggle = document.querySelector('#alternar-musica')
const musica = new Audio('./sons/luna-rise-part-one.mp3')

musica.loop = true
musica_toggle.addEventListener('change', () => {
    if(musica.paused){
        musica.play()
    } else {
        musica.pause()
    }
})

const btn_timer = document.querySelector('#start-pause');
const timer_start = new Audio('./sons/play.wav');
const timer_pause = new Audio('./sons/pause.mp3');
const timer_finalizado = new Audio('./sons/beep.mp3')
let contagem_tempo = 5
let contagem_tempo_intervalo = null
const contagem_tempo_regressiva = () => {
    if(contagem_tempo <= 0){
        timer_finalizado.play()
        alert('Timer Finalalizado!')
        resetar_contagem_tempo()
        return
    }
    contagem_tempo -= 1
    console.log('Timer: ' + contagem_tempo)
}

btn_timer.addEventListener('click', iniciar_contagem_tempo)

function iniciar_contagem_tempo() {
    if(contagem_tempo_intervalo){
        timer_pause.play()
        resetar_contagem_tempo()
        return
    }
    timer_start.play()
    contagem_tempo_intervalo = setInterval(contagem_tempo_regressiva, 1000)
}

function resetar_contagem_tempo() {
    clearInterval(contagem_tempo_intervalo)
    contagem_tempo_intervalo = null
}

const timer = document.querySelector('#timer')
const duracao_foco = 1500; 
const duracao_descanso_curto = 300; 
const duracao_descanso_longo = 900;