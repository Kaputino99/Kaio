const chk = document.getElementById('chk')


chk.addEventListener('click', function () {
    document.getElementById('body').classList.toggle('dark')
    document.getElementById('fundo-label').classList.toggle('dark')
    document.querySelector('header').classList.toggle('dark')
    document.getElementById('sobre').classList.toggle('dark')
    document.getElementById('text-sobre').classList.toggle('dark')
    document.getElementById("b").classList.toggle('dark')
    document.getElementById("b2").classList.toggle('dark')
    document.getElementById("b3").classList.toggle('dark')
    document.getElementById("b4").classList.toggle('dark')
    document.getElementById("b5").classList.toggle('dark')
    document.getElementById("b6").classList.toggle('dark')
})
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/icons8-cardápio-208.png"
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/icons8-x-96.png"
    }
}