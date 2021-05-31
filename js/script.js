var myemail= "roberto@live.it";
console.log(myemail);

var whitelist= ["carlo@live.it" , "maurizio@live.it" , "franco@live.it" , "roberto@live.it"] ;





for(var i=0 ; i < whitelist.length; i++) {
    if(myemail == whitelist[i]){
        document.getElementById("trovato").innerHTML = "ho trovato la tua email in posizione ";
        
    }
}
