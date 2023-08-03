function menuShow() {
    let menuMobile = document.querySelector('.menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.getElementById('botao').querySelector('img').src = "img/icons8-cardápio (1).svg";
    }else {
        menuMobile.classList.add('open')
        document.getElementById('botao').querySelector('img').src= "img/close_white_36dp.svg";
    }
}