$(document).ready(function() {
    //ADICIONANDO ENTRADA NA LISTA
    $('#input').change(function() {
        var input = $(this).val();
        $('ul').append('<li>' + input + '<img class="circle-check" src="circle-check.svg"></img> <img class="circle-trash" src="trash-solid.svg"></img> </li>');
        $(this).val('');
    });
    //EXCLUINDO TAREFA
    $('ul').on('click', '.circle-trash', function() {
        $(this).parent('li').fadeOut(200);
    });
    //DANDO CHECK NAS TAREFAS
    $('ul').on('click', '.circle-check', function() {
        $(this).parent('li').toggleClass('checked');
    });
});
//MODO ESCURO E MODO CLARO
let body = document.querySelector('body');
let container = document.querySelector('.container');
let btn = document.querySelector('.btn');
btn.onclick = function() {
    body.classList.toggle('light');
    container.classList.toggle('night');
}