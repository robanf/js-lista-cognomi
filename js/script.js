var myemail= prompt('inserisci la tua email');

var whitelist= ["carlo@live.it" , "maurizio@live.it" , "franco@live.it" , "roberto@live.it"] ;

var find=false;

for(var i=0 ; i < whitelist.length && find==false; i++) {
    if(myemail == whitelist[i]){
       find=true;
        
    }
}
if(find==true){
    document.getElementById("trovato").innerHTML = "ho trovato la tua email in posizione " + i;
}
else{
    document.getElementById("trovato").innerHTML = "non ho trovato la tua email";
}