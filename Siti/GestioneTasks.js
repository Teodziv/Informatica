let Tasks = [
    {"titolo": "Study", "done": false},
    {"titolo": "Rage", "done": false},
    {"titolo": "Kill", "done": false},
    {"titolo": "Die", "done": false},

    {"titolo": "Wake up", "done": true},
    {"titolo": "Cry", "done": true}
];

let elencoAzioniDaSvolgere = document.getElementById(ul-not-done);
let elencoAzioniSvolte = document.getElementById(ul-done);

let azioniDaSvolgere = "";
let azioniSvolte = "";

Tasks.forEach(task => { 
    if(task.done){
        azioniSvolte += "<li>" + task.titolo + "</li>"; 
    }
    else{
        azioniDaSvolgere += "<li>" + task.titolo + "</li>"; 
    }
   
})

elencoAzioniDaSvolgere.innerHTML = azioniDaSvolgere;
elencoAzioniSvolte.innerHTML = azioniSvolte;