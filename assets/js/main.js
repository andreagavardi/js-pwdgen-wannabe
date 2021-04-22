

// acquisisco nome utente

var nome = prompt("ciao!! qual'è il tuo nome?").toLowerCase();

// acquisisco cognome utente

var cognome = prompt("ora scrivi il tuo cognome..").toLocaleLowerCase();

// acquisisco colore preferito utente

var favColor = prompt("...e il tuo colore preferito?").toLocaleLowerCase();

// creo la variabile concatenando le stringhe inserite dall'utente
    
var password = nome + cognome + favColor;

// visualizzo nella pagina la password generata
 document.getElementById('pswd').innerHTML= 'la password generata è' + ' ' + password + '21';