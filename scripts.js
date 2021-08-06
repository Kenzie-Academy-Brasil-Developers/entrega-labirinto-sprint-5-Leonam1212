const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
// PRIMEIRO PASSO CRIAR A FUNÇÃO QUE CRIARÁ O LABIRINTO 15x21
const labirinto = () => {
    for (let i = 0; i < map.length; i++) {
        let linha = map[i]

        const labirinto = document.getElementById('labirinto')
        const celulaJogador = document.createElement('div')
        celulaJogador.classList.add('jogador')

            for(let j = 0; j < linha.length; j++) {
               
                let celula = document.createElement("div")

                if(linha[j] === "W") {
                     celula.classList.add('parede')     
                } 
                if(linha[j] === " "){ 
                     celula.classList.add('chao')
                }
                if (linha[j] === "S") {
                     celula.classList.add('inicio')
                     celula.appendChild(celulaJogador)
                }
                if (linha[j] === "F") {
                    celula.classList.add('final')
                }
                    celula.dataset.coords = `${i}-${j}`
                    celula.setAttribute('id', `${i}-${j}`)
                labirinto.appendChild(celula)
            }
    }
}
labirinto()


// CONDIÇÕES DE MOVIMENTAÇÃO
let proximaPosicao = [9,0] 
const movimento = (keyName) => {
    
    const player = document.querySelector('.jogador')
    const final = document.querySelector('.final')  
    if(keyName === "ArrowRight"){
        proximaPosicao[1]++
        if(map[proximaPosicao[0]][proximaPosicao[1]] === " " ||
        map[proximaPosicao[0]][proximaPosicao[1]] === "F") {  
            
            let converter = proximaPosicao.join("-")
            let chao = document.getElementById(`${converter}`)
            chao.appendChild(player)
            
            
        }
        else if (map[proximaPosicao[0]][proximaPosicao[1]] === "W"){
            proximaPosicao[1]--
        }
    }
    if(keyName === "ArrowLeft"){
        proximaPosicao[1]--
        if(map[proximaPosicao[0]][proximaPosicao[1]] === " "){
            let converter = proximaPosicao.join("-")
            let chao = document.getElementById(`${converter}`)
            chao.appendChild(player)
            
        }
        else if (map[proximaPosicao[0]][proximaPosicao[1]] === "W"){
            proximaPosicao[1]++
        }
    }
    if(keyName === "ArrowDown"){
        proximaPosicao[0]++
        if(map[proximaPosicao[0]][proximaPosicao[1]] === " "){
            let converter = proximaPosicao.join("-")
            let chao = document.getElementById(`${converter}`)
            chao.appendChild(player)
                 
        }
        else if (map[proximaPosicao[0]][proximaPosicao[1]] === "W"){
            proximaPosicao[0]--
        }
    }
    if(keyName === "ArrowUp"){
        proximaPosicao[0]--
        if(map[proximaPosicao[0]][proximaPosicao[1]] === " "){
            let converter = proximaPosicao.join("-")
            let chao = document.getElementById(`${converter}`)
            chao.appendChild(player)
        }
        else if (map[proximaPosicao[0]][proximaPosicao[1]] === "W"){
            proximaPosicao[0]++
        }
    }
    vitoria(player, final)
}


// FUNÇÃO DE VITÓRIA COM CONTADOR DE RELOAD
const vitoria = (player, final) => {
    const tempo = document.getElementById("time") 

    if (player.parentElement === final) {

        let modal = document.querySelector("#vitoria")
        modal.style.display = "block"

        const contador = () => {
        tempo.textContent--
        }
        setInterval(contador, 1000)

        setTimeout(function(){
            document.location.reload(true)
        },10000)
    }
    
}

// EVENTOS DO TECLADO
document.addEventListener("keydown", (evt) => {
        const keyName =  evt.key
     
        if(keyName === "ArrowRight"){
            movimento(keyName)
        }
        if(keyName === "ArrowLeft"){
            movimento(keyName)
        }
        if(keyName === "ArrowDown"){
            movimento(keyName)
        }
        if(keyName === "ArrowUp"){
            movimento(keyName)
        } 
    })





