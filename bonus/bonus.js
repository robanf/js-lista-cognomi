var cognome= prompt('dimmi il tuo cognome');

cognome=cognome.charAt(0).toUpperCase() + cognome.slice(1);

var listacognomi= [ 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

listacognomi.push(cognome);

listacognomi.sort();

var pos = listacognomi.indexOf(cognome);

for(var i=0 ; i<listacognomi.length; i++){
    document.getElementById("cognomi").innerHTML+=(i+1) + listacognomi[i] + "<br>";

}

document.getElementById("pos").innerHTML= pos+1;
