const toggle = document.getElementById('toggle')
const header = document.querySelector('header')
const body = document.querySelector('body')
const cards = document.querySelector('.cards')
const overview = document.querySelector('.overview')    

toggle.addEventListener('change', (e)=>{
    
    header.classList.toggle('light', e.target.checked)
    body.classList.toggle('light', e.target.checked)
    cards.classList.toggle('light', e.target.checked)
    overview.classList.toggle('light', e.target.checked)
})
