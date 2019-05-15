$(document).ready(function(){
    let qtdPalavras = $('.frase-correta').text().split(" ").length;
    $('.qtdPalavras').html(qtdPalavras);

    let qtdDigitadas = $('.texto-digitado').text().split(" ").length;
    $('.qtdDigitadas').html(qtdPalavras);

    $(".campo-digitacao").keyup(function(){
        // usa-se .val pq é um input
        $('.texto-digitado').text( $(this).val());
        
    });
});

// pode ser feito com .on input
// $(document).ready(function () {
//     $(".campo-digitacao").on('input',function () {
//         // usa-se .val pq é um input
//         $('.texto-digitado').text( $(this).val());
//     })
// });

