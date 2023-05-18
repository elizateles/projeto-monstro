const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})


const todosOsMonstros = monstros.map(monstro => {
    return `<div>
        <p>Nome: ${monstro.nome}</p>
        <p>Altura: ${monstro.altura}
        <img src="${monstro.foto}">
        <p>Habiliades: ${monstro.habilidades}

    
    </div>`
})

secao.innerHTML = todosOsMonstros

