$('nav a').click(function(e){
    e.preventDefault();

    //seletor exp vai estar assim #cases
    var id = $(this).attr('href');

    //distancia cases ate top
    var targetOffset = $(id).offset().top;

    //animção jquery
    $("html, body").animate({
        scrollTop:targetOffset -59
      }, 500);
    
});


document.getElementById('form-consultoria').addEventListener('submit',function(e){
    e.preventDefault();
    window.location = "obrigado.html";
});


