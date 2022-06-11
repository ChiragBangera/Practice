for (let i=0;i<100;i++){
    const container = document.querySelector('#container')
    const button = document.createElement('button')
    button.innerText = 'Hey'
    container.appendChild(button)
}


const adjcontainer = function(){
    const select = document.querySelector('#container')
    const cont = document.createElement('div')
    cont.className = 'container'
    select.insertAdjacentElement('afterend',cont)
}

adjcontainer()

const container = document.querySelector('.container')
const newImg = document.createElement('img');
const srcs = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/10001.png'
newImg.src = srcs
container.appendChild(newImg)