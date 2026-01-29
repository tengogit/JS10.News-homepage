const burgerbtn= document.getElementById('burger-icon')
const burgermenu =document.getElementById('burger-menu')
const Xicon =document.getElementById('X-icon')
const cont = document.getElementById('cont')
burgerbtn.addEventListener('click', () => {
burgermenu.classList.add('show')
cont.classList.add('effect')
});
Xicon.addEventListener('click', ()=>{
    burgermenu.classList.remove('show')
    cont.classList.remove('effect')
})
