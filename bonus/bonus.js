var cognome= prompt('dimmi il tuo cognome');

var listacognomi= [ 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

listacognomi.push(cognome);



listacognomi.sort();

for(var i=0 ; i<listacognomi.length; i++){
    document.getElementById("cognomi").innerHTML+= " " + listacognomi[i];
    console.log(listacognomi[i]);
}

