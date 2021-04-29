var texto = document.getElementById('mensagem');
var botaoCod = document.getElementById('code');
var botaoDescod = document.getElementById('descode');
var opcao = document.getElementById('opcao');
var codificado64 = '';
var texto2='';
var casas = document.getElementById("casas");
var cifra = [];
var ciframeio = [];
var cifrafim = [];
var cifrafinal = [];
var descoCifra = [];
var descoCifraMeio = [];
var descoCifraFim = '';
var cesar = document.getElementById('cesar');
var sumir = document.getElementById('sumir');
var rCodifica = document.getElementById('codifica');
var rDesodifica = document.getElementById('descodifica');


botaoCod.addEventListener("click", function(){

    if(opcao.value == "Base 64"){

        console.log(texto.value);
        codificado64 = btoa(texto.value);
        console.log(codificado64);

        var p = document.createElement('p');
        document.getElementById('resultado').appendChild(p);
        p.innerText = "seu texto codificado é: " + codificado64; 

      }else{     
        cifra = texto.value.split('');
        for(i = 0; i < cifra.length; i++){

            ciframeio.push(cifra[i].charCodeAt()); 

            cifrafim.push((ciframeio[i] + parseInt(casas.value)));

            cifrafinal.push(String.fromCharCode(cifrafim[i]));
          } 

            var p3 = document.createElement('p');
            document.getElementById('resultado').appendChild(p3);
            p3.innerText = "seu texto codificado é: " + cifrafinal;
        
   }
});

botaoDescod.addEventListener("click", function(){

    if(opcao.value == "Base 64"){
        
        console.log(codificado64);
        texto2 = atob(codificado64);
        console.log(texto2);

        var p2 = document.createElement('p');
        document.getElementById('resultado').appendChild(p2);
        p2.innerText = "seu texto descodificado é: " + texto2 ; 


      }else{
        for(i = 0; i < cifrafim.length; i++){

          descoCifra.push((cifrafim[i] - parseInt(casas.value)));
          descoCifraMeio.push(String.fromCharCode(descoCifra[i]));
          descoCifraFim = descoCifraMeio.join('');
        }  
        var p4 = document.createElement('p');
        document.getElementById('resultado').appendChild(p4);
        p4.innerText = "seu texto descodificado é: " + descoCifraFim;
   }

});

opcao.addEventListener('change', function(){
  if(opcao.value == "Base 64"){
    sumir.style.visibility = "hidden";
  }else{
    sumir.style.visibility = "visible";
  }

})

rCodifica.addEventListener('change', function(){

  botaoCod.style.visibility = "visible";

});

rDesodifica.addEventListener('change', function(){
  
  botaoDescod.style.visibility = "visible";

});