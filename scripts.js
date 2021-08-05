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
        // const divLinha =  document.createElement('div')
        // divLinha.classList.add("divLinha")
        // labirinto.appendChild(divLinha)
            for(let j = 0; j < linha.length; j++) {
               
                let celula = document.createElement("div")

                if(linha[j] === "W") {
                    celula.classList.add('parede')     
                } else if(linha[j] === " "){ 
                    celula.classList.add('chao')
                } else if (linha[j] === "S") {
                     celula.classList.add('inicio')
                    // celulaJogador.dataset.coord = `${i},${j}`
                       celula.appendChild(celulaJogador)
                } else if (linha[j] === "F") {
                    celula.classList.add('final')
                }
                    // celula.dataset.linha = `${i}`
                    // celula.dataset.coluna = `${j}`
                    celula.setAttribute('id', `${i}${j}`)
                labirinto.appendChild(celula)
            }
    }
}
labirinto()
 

// 1- Adicionar eventos nos cliques dos botões ( as setas do teclado)
// 2- Esses eventos disparam a função de movimento
// 3- Nessa função vc verifica qual tecla foi clicada, pra saber qual direção vc vai movimentar o jogador
// 4- Vc precisa armazenar a posição do jogador em uma variável
// 5- A partir da direção do clique, vc verifica se pode movimentar pra aquela célula
// 6- Se puder, faz o append da div do jogador
// Imagine o labirinto como um plano cartesiano
// Se clicar pra movimentar pra direita, quer dizer que vc precisa ir uma coluna pra frente e se manter na mesma linha


// 2- Esses eventos disparam a função de movimento
document.addEventListener("keydown", (evt) => {
        const keyName =  evt.key
        // Aqui eu chamo a função de movimento
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
    
const player = document.querySelector('.jogador')
console.log(player)
    
let labirint = document.querySelector(`#labirinto`)
console.log(labirint)


let jogador = {
    linha: 9,
    coluna:0,
}

proximaPosicao = [9,0]

// 3- Nessa função verificar qual tecla foi clicada, pra saber qual direção vc vai movimentar o jogador


const movimento = (keyName) => {
    if(keyName === "ArrowRight"){
        proximaPosicao[1]++
        if(map[proximaPosicao[0]][proximaPosicao[1]] === " "){
            let converter = proximaPosicao.join("")
            let chao = document.getElementById(`${converter}`)
            chao.appendChild(player)
           
            console.log(chao)
        }
    }
    if(keyName === "ArrowLeft"){
        proximaPosicao[1]--
            if(map[proximaPosicao[0]][proximaPosicao[1]] === " "){
                let converter = proximaPosicao.join("")
                let chao = document.getElementById(`${converter}`)
                chao.appendChild(player)
                
                console.log(converter)
            }
    }
    if(keyName === "ArrowDown"){
        proximaPosicao[0]++
            if(map[proximaPosicao[0]][proximaPosicao[1]] === " "){
                let converter = proximaPosicao.join("")
                let chao = document.getElementById(`${converter}`)
                chao.appendChild(player)
                
                console.log(converter)
            }
    }
    if(keyName === "ArrowUp"){
        proximaPosicao[0]--
            if(map[proximaPosicao[0]][proximaPosicao[1]] === " "){
                let converter = proximaPosicao.join("")
                let chao = document.getElementById(`${converter}`)
                chao.appendChild(player)
                
                console.log(converter)
            }
    }

    }
    


//     const player = document.querySelector('.jogador')
// console.log(player)
 


















// const labirinto = () => {
//     for (let i = 0; i < map.length; i++) {
//         let linha = map[i]
//             for(let j = 0; j < linha.length; j++) {
//                 const labirinto = document.getElementById('labirinto')
//                 const celula = document.createElement("div")
//                 const celulaJogador = document.createElement('div')
//                 celulaJogador.classList.add('jogador')
                
                
//                 if(linha[j] === "W") { 
//                     celula.classList.add('parede')
//                 }
//                 if(linha[j] === " "){
//                     celula.classList.add('chao')
//                 }
//                 if(linha[j] === "S"){
                    
//                     celula.classList.add('inicio')
//                     celula.appendChild(celulaJogador)
                    
//                 }
//                 if(linha[j] === "F"){
//                     celula.classList.add('final')   
//                 }
//                 labirinto.appendChild(celula)
//             }
//     }
// }
// labirinto()