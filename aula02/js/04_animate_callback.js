$(document).ready(function(){
    $('#animate').click(function(){
        $('#content').animate({"width": "90%", "heigth": "30%"},
        1000, function (){
            $(this).html("Animação Terminou !!!");
        })
    
    })
    });

    // coisaElement.animate(propriedades de CSS , duração 
    // função que sera executada quando animação acabar)