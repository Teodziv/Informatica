const gameContainer = document.querySelector(".container"),
    utenteRisultato = document.querySelector(".utente_risultato img"),
    cpuRisultato = document.querySelector(".cpu_risultato img"),
    risultato = document.querySelector(".risultato"),
    opzioniImagini = document.querySelectorAll(".opzione_immagine");

opzioniImagini.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        utenteRisultato.src = cpuRisultato.src = "immagini/Sasso.png";
        risultato.textContent = "Rullo di tamburi...";

        opzioniImagini.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            let immagineSrc = e.target.querySelector("img").src;
            utenteRisultato.src = immagineSrc;
    
            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImmagine = ["Immagini/Sasso.png", "Immagini/Carta.png", "Immagini/Forbice.png"];
    
            cpuRisultato.src = cpuImmagine[randomNumber];
    
            let cpuValue = ["S", "C", "F"][randomNumber];
            let utenteValue = ["S", "C", "F"][index];
    
            let risultati = {
                SS: "Pareggio",
                SC: "Sconfitta.",
                SF: "Vittora!",
                CS: "Vittora!",
                CC: "Pareggio",
                CF: "Sconfitta.",
                FS: "Sconfitta.",
                FC: "Vittora!",
                FF: "Pareggio",
            };
    
            let risultatiValue = risultati[utenteValue + cpuValue];
            risultato.textContent = `${risultatiValue}`;
        },2500)
    });
});
