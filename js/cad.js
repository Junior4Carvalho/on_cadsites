

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 125 * i);
    });
}



// Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
// function typeWriter(elemento) {
//   const textoArray = elemento.innerHTML.split('');
//   elemento.innerHTML = '';
//   for(let i = 0; i < textoArray.length; i++) {
//     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
//   }
// }

const idea = document.querySelector('.idea h1');
typeWriter(idea);

const welcome = document.querySelector('.welcome h1');
typeWriter(welcome);





    


    
jQuery(document).ready(function(){

jQuery("#subirTopo").hide();

jQuery('a#subirTopo').click(function () {
        jQuery('body,html').animate({
        scrollTop: 0
        }, 1100);
        return false;
});

jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 1300) {
            jQuery('#subirTopo').fadeIn();
        } else {
            jQuery('#subirTopo').fadeOut();
        }
    });
});



    function orcamento(){
        window.location.replace("cadcontact.html")
    }






    window.sr = ScrollReveal({ reset:true});
    ScrollReveal({ distance: '20px' });
    sr.reveal('.welcome', {duration : 1000,  origin: 'left'})
    sr.reveal('.objectivo', {duration : 1000,  origin: 'bottom'})
    sr.reveal('.objectivo p', {duration : 1000,  origin: 'bottom'})
    sr.reveal('.beneficios', {duration : 1000, origin:'top'})
    sr.reveal('.planos', {duration : 1500, origin:'top'})
    sr.reveal('.pqct', {duration : 1000, origin:'bottom'})
    sr.reveal('.idea', {duration : 1000, origin:'bottom'})
    sr.reveal('.divdown', {duration : 1000, origin:'bottom'})
    

