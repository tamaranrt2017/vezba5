const knjigaFunkcije = require("./knjigafunkcije/knjigafunkcije.js");
console.log("");
console.log("---Funkcija sveKnjige---");
console.log(knjigaFunkcije.sveKnjige());


console.log("");
console.log("---Dodavanje knjige---");
let tempID = 4;
while(true){
    let novaKnjiga = knjigaFunkcije.addKnjiga(tempID, "Ilijada","Šekspir");
    if(novaKnjiga==0)
        console.log("Greska! Uneli ste vec postojeci ID!");
    else
        console.log("Uspesno ste dodali knjigu!");

    if(tempID==5)
        break;

    tempID++;
}


console.log("");
console.log("---Dobavljanje knjige po ID---");
while(true){
    let knjiga = knjigaFunkcije.getKnjiga(tempID);
    if(knjiga==null)
        console.log("Unet nepostojeci ID!");
    else
        console.log("ID: " + knjiga.id + ", naziv: " + knjiga.naziv+", autor: " + knjiga.autor);

    if(tempID==6)
        break;
    tempID++;
}


console.log("");
console.log("---Postavljanje autora za odabran naziv knjige---");
let tempNaziv = "Ilijada";

while(true){
    let knjiga1 = knjigaFunkcije.postaviAutora(tempNaziv,"Homer");
    if(knjiga1 == 1)
        console.log("Uspesno ste promenili ime autora za trazenu knjigu!");
    else
        console.log("Unet naziv knjige nije pronadjen!");

    if(tempNaziv == "Deca iz pavlove ulice")
        break;
    tempNaziv = "Deca iz pavlove ulice";
}




console.log("");
console.log("---Dobavljanje liste knjiga po autoru---");
let tempAutor = "Ivo Andrić"
while(true){
    let novaLista = knjigaFunkcije.getKnjigaByAuthor(tempAutor);
    if(novaLista.length == 0)
        console.log("Nije pronadjena ni jedna knjiga!");
    else
    {
        console.log("Nadjene knjige: ");
        console.log(novaLista);
    }
        
    if(tempAutor == "Dobrica Erić")
        break;
    tempAutor = "Dobrica Erić";
}




console.log("");
console.log("---Brisanje knjige po ID---");
tempID = 1;
while(true){
    let knjigaZaBrisanje = knjigaFunkcije.deleteKnjiga(tempID);

    if(knjigaZaBrisanje==1)
        console.log("Uspesno ste obrisali knjigu!");
    else
        console.log("Niste uneli validan ID!");
    if(tempID==10)
        break;
    tempID = 10;
}