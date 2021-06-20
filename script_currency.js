// VARIÁVEIS QUE SERÃO MODIFICADAS COM O DARKMODE
var conteudo = document.getElementsByTagName('body')[0]
var menu = document.getElementsByTagName('nav')[0]
var link = document.getElementsByTagName('a')[0]
var link1 = document.getElementsByTagName('a')[1]
var link2 = document.getElementsByTagName('a')[2]
var link3 = document.getElementsByTagName('a')[3]
var texto = document.getElementById('textoh3')
var darkMode = document.getElementById('darkmode')

// FUNÇÃO PARA MODIFICAR AS VARIÁVEIS (A MODIFICAÇÃO É FEITA NO CSS)
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('dia')
    conteudo.classList.toggle('noite')
    menu.classList.toggle('noite')
    link.classList.toggle('noite')
    link1.classList.toggle('noite')
    link2.classList.toggle('noite')
    link3.classList.toggle('noite')
    texto.classList.toggle('noite')
})


function mostraResultado() {  
    var valorUsuario = document.getElementById('valor').value; 
    var moeda1 = document.getElementById('moeda1').value; 
    var moeda2 = document.getElementById('moeda2').value; 
    var conversao = 0; 
    var nomeMoeda = 0; 

    if(moeda2 == 1){ 
        nomeMoeda = "Reais";
    }else if(moeda2 == 0.18){
        nomeMoeda = "Dólares Americanos";
    }else if(moeda2 == 0.23){
        nomeMoeda = "Dólares Canadenses";
    }else if(moeda2 == 0.15){
        nomeMoeda = "Euros";
    }else if(moeda2 == 0.13){
        nomeMoeda = "Libras";
    }else if(moeda2 == 17.13){
        nomeMoeda = "Pesos Argentinos";
    }

    if(valorUsuario<0 || isNaN(valorUsuario)){ 
        alert("Hey! Não vale digitar letras nem número menores que zero, tá?");
        document.getElementById('resultado').innerHTML = (("Digite um número maior que zero").fontcolor('brown')) 
        
    }else if(moeda1==moeda2 || valorUsuario=="" || moeda1=="" || moeda2==""){ 
        alert("Você precisa digitar um valor e escolher moedas diferentes");
        document.getElementById('resultado').innerHTML = (("Tente de novo, digite um valor e selecione as duas moedas diferentes.").fontcolor('brown'))

    }else{ 
        conversao = (valorUsuario * moeda2 / moeda1).toFixed(2)
        document.getElementById('resultado').innerHTML = conversao+" "+nomeMoeda
        document.getElementById('resultado').style.fontSize = "1.6em"; 
        document.getElementById('resultado').style.backgroundColor = "#d8e9dc"; 
        document.getElementById('resultado').style.color = "black";
    }
}


