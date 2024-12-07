#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

void giocaPartita(string nomeUtente) {
    int punteggioUtente = 0, punteggioComputer = 0;
    string scelte[3] = {"Sasso", "Carta", "Forbice"};

    for (int round = 1; round <= 3; round++) {
        cout << "\n--- Round " << round << " ---" << endl;
        cout << "Scegli: (1) Sasso, (2) Carta, (3) Forbice: ";
        int sceltaUtente;
        cin >> sceltaUtente;

        while (sceltaUtente < 1 || sceltaUtente > 3) {
            cout << "Scelta non valida. Riprova: ";
            cin >> sceltaUtente;
        }

        sceltaUtente -= 1;

        int sceltaComputer = rand() % 3;

        cout << nomeUtente << " sceglie " << scelte[sceltaUtente] << endl;
        cout << "Computer sceglie " << scelte[sceltaComputer] << endl;

        if (sceltaUtente == sceltaComputer) {
            cout << "Pareggio!" << endl;
        } else if ((sceltaUtente == 0 && sceltaComputer == 2) || 
                   (sceltaUtente == 1 && sceltaComputer == 0) || 
                   (sceltaUtente == 2 && sceltaComputer == 1)) {
            cout << nomeUtente << " vince il round!" << endl;
            punteggioUtente++;
        } else {
            cout << "Computer vince il round!" << endl;
            punteggioComputer++;
        }
    }
    
    cout << "\n--- Risultato Finale ---" << endl;
    cout << nomeUtente << ": " << punteggioUtente << " punti" << endl;
    cout << "Computer: " << punteggioComputer << " punti" << endl;

    if (punteggioUtente > punteggioComputer) {
        cout << nomeUtente << " vince la partita!" << endl;
    } else if (punteggioUtente < punteggioComputer) {
        cout << "Computer vince la partita!" << endl;
    } else {
        cout << "La partita è un pareggio!" << endl;
    }
}

int main() {
    string nomeUtente;
    char risposta;

    cout << "Benvenuto a Morra Cinese! Inserisci il tuo nome: ";
    cin >> nomeUtente;

    srand(time(NULL));

    do {
        giocaPartita(nomeUtente);

        cout << "\nVuoi rigiocare? (s/n): ";
        cin >> risposta;
    } while (risposta == 's' || risposta == 'S');

    cout << "Grazie per aver giocato! Alla prossima!" << endl;
    system("pause");
    return 0;
}