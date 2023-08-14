

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 100 * i);
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

const cad = document.querySelector('#cad');
const idea = document.querySelector('#idea');
typeWriter(cad);
typeWriter(idea);




src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js">


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





    window.sr = ScrollReveal({ reset:true});
    ScrollReveal({ distance: '20px' });
    sr.reveal('.qsft', {duration : 1000,  origin: 'left'})
    sr.reveal('.textos', {duration : 1500,  origin: 'bottom'})
    sr.reveal('.qea', {duration : 1000, origin:'top'})
    sr.reveal('.idea', {duration : 1000, origin:'bottom'})
    sr.reveal('.divdown', {duration : 1000, origin:'bottom'})
    


