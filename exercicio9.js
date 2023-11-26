const piadas = [
    "Qual é o desastre natural que os cães mais odeiam?",
    "Qual é a peça de carro que é feita só no Egito?",
    "O que o cadarço falou para o tênis?",
    "O engenheiro olhou para o espelho. O que aconteceu?",
    "Na briga entre o esparadrapo e a fita isolante, quem ganhou?.",
    "O que o menino fez para não ir ao oculista?.",
    "Sabias que sem árabes não tinha acontecido o 11/9? Tinha acontecido o XI/IX.",
    "Qual é a parte mais velha do carro?."
]
let meuBozo = document.getElementById("meuBozo")
let minhaM = document.getElementById("minhaM")

meuBozo.addEventListener('click', function(){

    const random = piadas[Math.floor(Math.random() * piadas.length)]
    
    minhaM.textContent = random
})