document.addEventListener("DOMContentLoaded", function() {
    var miAudio = document.getElementById('musica_lanita');
    var fondo = document.getElementById('contenedor-inicial');
    var boton = document.getElementById('iniciar');
    
    boton.addEventListener('click', function() {
      fondo.style.display = 'none';
      miAudio.play();
    });


  });