const html = document.querySelector('html')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const btn_foco = document.querySelector('.app__card-button--foco')
const btn_curto = document.querySelector('.app__card-button--curto')
const btn_longo = document.querySelector('.app__card-button--longo')

const musica_toggle = document.querySelector('#alternar-musica')
const musica = new Audio('./sons/luna-rise-part-one.mp3')

const btn_timer = document.querySelector('#start-pause');
const btn_timer_title = document.querySelector('#start-pause span');
const btn_timer_icone = document.querySelector('.app__card-primary-butto-icon');
const timer_start = new Audio('./sons/play.wav');
const timer_pause = new Audio('./sons/pause.mp3');
const timer_finalizado = new Audio('./sons/beep.mp3')
let contagem_tempo = 1500
let contagem_tempo_intervalo = null

const timer = document.querySelector('#timer')
const duracao_foco = 1500; 
const duracao_descanso_curto = 300; 
const duracao_descanso_longo = 900;

btn_foco.addEventListener('click', () => {
    contagem_tempo = duracao_foco
    alterar_contexto('foco')
    btn_foco.classList.add('active')
})

btn_curto.addEventListener('click', () => {
    contagem_tempo = duracao_descanso_curto
    alterar_contexto('descanso-curto')
    btn_curto.classList.add('active')
})

btn_longo.addEventListener('click', () => {
    contagem_tempo = duracao_descanso_longo
    alterar_contexto('descanso-longo')
    btn_longo.classList.add('active')
})

function alterar_contexto(contexto) {
    mostrar_tempo()
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

musica.loop = true
musica_toggle.addEventListener('change', () => {
    if(musica.paused){
        musica.play()
    } else {
        musica.pause()
    }
})

const contagem_tempo_regressiva = () => {
    if(contagem_tempo <= 0){
        timer_finalizado.play()
        alert('Timer Finalalizado!')
        resetar_contagem_tempo()
        return
    }
    contagem_tempo -= 1
    mostrar_tempo()
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
    btn_timer_title.textContent = "Pausar"
    btn_timer_icone.setAttribute('src', `./imagens/pause.png`)
}

function resetar_contagem_tempo() {
    clearInterval(contagem_tempo_intervalo)
    btn_timer_title.textContent = "Começar"
    btn_timer_icone.setAttribute('src', `./imagens/play_arrow.png`)
    contagem_tempo_intervalo = null
}

function mostrar_tempo() {
    const tempo = new Date(contagem_tempo * 1000)
    const tempo_formatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    timer.innerHTML = `${tempo_formatado}`
}

mostrar_tempo()