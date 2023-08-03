const botao = document.querySelector('button.abrir')
const nav = document.querySelector('nav')
const botaoFechar = document.querySelector('button.fechar')

 botao.addEventListener('click', ()=>{
    nav.classList.add('mostrar')
 })
 botaoFechar.addEventListener('click', ()=>{
    nav.classList.remove('mostrar')
 })



 
 var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}