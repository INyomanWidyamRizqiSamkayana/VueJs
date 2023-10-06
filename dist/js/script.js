//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

});

//NAVBAR FIXED
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNavbar = header.offsetTop;

    if(window.pageYOffset > fixedNavbar){
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
}