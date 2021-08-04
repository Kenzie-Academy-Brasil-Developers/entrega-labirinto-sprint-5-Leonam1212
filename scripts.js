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

console.log(map[0].length)



const labirinto = () => {
    for (let i = 0; i < map.length; i++) {
        let linha = map[i]
            for(let j = 0; j < linha.length; j++) {
                const labirinto = document.getElementById('labirinto')
                const celula = document.createElement("div")
                
                if(linha[j] === "W") { 
                    celula.classList.add('parede')
                }
                if(linha[j] === " "){
                    celula.classList.add('chao')
                }
                if(linha[j] === "S"){
                    celula.classList.add('jogador')
                }
                if(linha[j] === "F"){
                    celula.classList.add('final')   
                }
                labirinto.appendChild(celula)
            }
    }
}

// Celulas dentro da coluna 
// coluna dentro labirinto

labirinto()



// const labirinto = () => {
//     for (let i = 0; i < map.length; i++) {
//         console.log(map[i])
//         let linha = map[i]
//         const labirinto = document.getElementById('labirinto')
//         // const divLinha =  document.createElement('div')
//         // divLinha.classList.add("divLinha")
//         // labirinto.appendChild(divLinha)
//             for(let j = 0; j < linha.length; j++) {

//                 let celula = document.createElement("div")

//                 if(linha[j] === "W") {
//                     celula.classList.add('parede')     
//                 } else if(linha[j] === " "){ 
//                     celula.classList.add('chao')
//                 } else if (linha[j] === "S") {
//                     celula.classList.add('jogador')
//                 } else if (linha[j] === "F") {
//                     celula.classList.add('final')
//                 }
//                 labirinto.appendChild(celula)
//             }
//     }
// }

// // Celulas dentro da coluna 
// // coluna dentro labirinto

// labirinto()