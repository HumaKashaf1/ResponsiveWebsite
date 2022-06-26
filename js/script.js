burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightnav = document.querySelector('.rightnav');
burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav');
    navList.classList.toggle('v-class');
    rightnav.classList.toggle('v-class');
});