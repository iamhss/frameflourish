var loader = document.getElementById('preloader');
window.addEventListener("load", function(){
    loader.style.display= "none";
});





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach( links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }; 
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');

};

// let menuIcon = document.querySelector('#menu-icon');
// let navBar = document.querySelector('.navBar');

// menuIcon.onclick = () =>{
//     menuIcon.classList.toggle('bx-x');
//     navBar.classList.toggle('active');
// };

ScrollReveal({ 
    reset: true,
    distance : '80px',
    duration: 2000,
    delay : 200  
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.homeImg , .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,  .program', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });

const typed = new Typed('.multiText', {
    strings : ['Mini frames', 'A5 frames', 'A4 frames', 'Birthday frames', 'Cartoon frames', 'Nikkah certificate', 'Chocolate tower'],
    typeSpeed : 100,
    backSpeed : 50,
    backDelay : 1000,
    loop : true
});


