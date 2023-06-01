# Traccia

Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica!

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparre l'ultima e viceversa!

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails in basso o sulla destra dell’immagine grande attiva, (usate lo screen in allegato come ispirazione). Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

## Steps

1. Recupero gli elementi dal DOM
1. Mi creo l'Array con gli url delle immagini
1. Preparo una variabile che mi servira per inserire le immagini nel DOM
1. Preparo un ciclo con il quale andrò ad inserire il tag img e l'immagine all'interno della variabile presa al punto 3.
1. Inserisco le immagini nel DOM
1. Recupero dal DOM le immagini
1. Preparo una variabile con l'index di partenza (0)
1. Aggiungo la classe active alla prima immagine (situazione di partenza)
1. Preparo il bottone next per l'ascolto al click

   - Al momento del click faro togliere la classe active all'img corrispondete all'index corrente
   - Andrò ad aumentare di 1 la variabile creata al punto 7
   - Una volta aumentato il valore andrò ad aggiungere la classe active all'immagine corrispondente all'index della variabile al punto 7 (dopo che è stato aumentato di 1)

1. Preparto il bottone prev per l'ascolto al click
   - Al momento del click faro togliere la classe active all'img corrispondete all'index corrente
   - Andrò a diminuire di 1 la variabile creata al punto 7
   - Una volta diminuito il valore andrò ad aggiungere la classe active all'immagine corrispondente all'index della variabile al punto 7 (dopo che è stato diminuito di 1)
