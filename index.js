


var r = 'Resposta Certa'

var re = 'Resposta Errada'

var conteudo = 'index.html'

function clickBotao() {
     
       document.querySelector('.bot-click').style.background = 'Green'
          window.alert('Resposta Certa') ;

       
} 

function clickErrou(){
     document.querySelector('.bot-errado').style.background = 'Red'
     window.alert('Resposta Errada');
     
}