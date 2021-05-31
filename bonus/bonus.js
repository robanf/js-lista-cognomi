var cognome= prompt('dimmi il tuo cognome');

var listacognomi= [ 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

listacognomi.push(cognome);



listacognomi.sort();

var pos = listacognomi.indexOf(cognome);

for(var i=0 ; i<listacognomi.length; i++){
    document.getElementById("cognomi").innerHTML+= " " + listacognomi[i];
}

document.getElementById("pos").innerHTML= pos+1;
