var languagesdiv = document.querySelector('.languages');
var arrow = document.querySelector('#arrow');
var searchicon = document.querySelector('#axtarbutton')
var dn =  document.querySelector('#inp')
var dni =  document.querySelector('#inp').value;
var xclose= document.querySelector('#x')
var barmenu = querySelector('#bar')

    

    

searchicon.onclick = function(){
     dn.classList.toggle('active')
     xclose.classList.toggle('active')
}   
xclose.onclick = function(){
    dn.classList.toggle('active') 
    this.classList.toggle('active')  
}

arrow.onclick= function() {
    languagesdiv.classList.toggle('active')
    arrow.classList.toggle('arrow')
}