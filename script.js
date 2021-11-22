const text = document.querySelector('.text')
const container = document.querySelector('.search')
const title = document.querySelector('.title')
const img = document.querySelector('.main-img')

text.addEventListener('focus', ()=> {
    img.classList.add('active')
    title.classList.add('active')
    text.classList.add('active')
    container.classList.add('onSearch')

})

