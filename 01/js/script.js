// javascript
var lis = document.querySelectorAll('li');
for (var i = 0; i < lis.length ; i ++){
    lis [i].textContent = "batata"
}

var botao = document.getElementsByTagName('button');
for (var i = 0; i < botao.length ; i ++){
    botao [i].textContent = "chocolate"
}


// exemplo com os testes abaixo 
function mudarTextoLi(){
    $("li").text("morango");
}

// condicional
function mudarTextoLi(){
    if($('li').length > 0){
        console.log($('.lista1 .botao').text ());
    }
}

// inicio do jquery
$(document).ready(function(){
    alert("teste");
    mudarTextoLi();
});

// // exemplo com os testes abaixo 
// function mudarTextoLi(){
//     $("li").text("morango");
// }


// jquery
$("li").text("chocolate")
$("button").text("sorvete")

// mudando texto da div teste
$('.teste').text ('escolha')

// mudando primeiro elemento da lista 

$('.lista2 > .botao').text ('sabores:')