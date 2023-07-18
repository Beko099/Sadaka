const rowTop = document.body.querySelectorAll('.home-reasons .col-md-6')[0]
const rowBottom = document.body.querySelectorAll('.home-reasons .col-md-6')[1]
const modalHome = document.body.querySelector('.modal-home-reasons')
const body = document.querySelector('body')
const close = document.querySelector('.modal-home-reasons img')


console.log(rowBottom)
console.log(body)


let counterTop = 0
let counterBottom = 0



rowTop.addEventListener('click', () => {
    counterTop++
    modalHome.style.display = 'flex'
})

rowBottom.addEventListener('click', () => {
    modalHome.style.display = 'flex'
})

close.addEventListener('click', () => {
    modalHome.style.display = 'none'
})


