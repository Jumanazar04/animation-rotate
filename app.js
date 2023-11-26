const btn = document.querySelector('.btn')
const card = document.querySelector('.card')
const navbar = document.querySelector('.navbar')


btn.addEventListener('click', (e)=>{
    e.preventDefault()
    card.classList.toggle('animation-rotate')
    navbar.classList.toggle('navbar-rotate')
})