const knjiga = require("../knjiga/knjiga.js");

function sveKnjige(){
    return knjiga.listaKnjiga;
}
module.exports.sveKnjige = () => sveKnjige();




function addKnjiga (id,naziv,autor){
    for(i=0;i<knjiga.listaKnjiga.length;i++){
        if(i==id){
            return 0;
        }
    }
    let novaKnjiga = {id: id, naziv:naziv, autor:autor};
    knjiga.listaKnjiga.push(novaKnjiga);
    return 1;
}
module.exports.addKnjiga = (id,naziv,autor) => addKnjiga(id,naziv,autor);




function getKnjiga(id){
    for (i=0;i<knjiga.listaKnjiga.length;i++)
    {
        if(i==id){
            return knjiga.listaKnjiga[id];
        } 
    }
    return null;
}
module.exports.getKnjiga = (id) => getKnjiga(id);




function postaviAutora(naziv,autor){
    let flag = false;
    for (i=0;i<knjiga.listaKnjiga.length;i++){
        if(knjiga.listaKnjiga[i].naziv == naziv)
        {
            knjiga.listaKnjiga[i].autor = autor;
            flag = true;
        }
    }
    if(flag)
        return 1;
    else
        return 0;
}
module.exports.postaviAutora = (naziv,autor) => postaviAutora(naziv,autor);




function getKnjigaByAuthor(autor){
    let novaLista = [];

    for (i=0;i<knjiga.listaKnjiga.length;i++){
        if(knjiga.listaKnjiga[i].autor == autor)
        {
            novaLista.push(knjiga.listaKnjiga[i]);
        }
    }
    return novaLista;
}
module.exports.getKnjigaByAuthor = (autor) => getKnjigaByAuthor(autor);





function deleteKnjiga(id){
    for (i=0;i<knjiga.listaKnjiga.length;i++){
        if(i==id)
        {
            delete knjiga.listaKnjiga[id];
            return 1;
        }
    }
    return 0;
}
module.exports.deleteKnjiga = (id) => deleteKnjiga(id);