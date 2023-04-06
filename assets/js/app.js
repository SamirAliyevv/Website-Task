var languagesdiv = document.querySelector('.languages');
var arrow = document.querySelector('#arrow');

arrow.onclick= function() {
    languagesdiv.classList.toggle('active')
    arrow.classList.toggle('arrow')
}