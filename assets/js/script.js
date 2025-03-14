/*1. Anvende javascript til at skifte farven i de sociale elementer (twitter, facebook og instagram) til en mere passende farve (jeres vurdering) */










/*2. Se den lidt skæve h1 i header - sørg for den ved hover "shaker"/ryster sig lidt. I bedes anvende javascript til at løse denne opgave - måske i kombination med css. Der findes endda js libraries/biblioteker I kan se på til formålet, f.eks. anime.js */














/*3. Brug javascript til at skifte billedet ud i .bigPicture-boksen, brug dette eller noget helt andet: https://cdn.pixabay.com/photo/2017/09/28/13/18/amusement-2795490_960_720.jpg */












/*4. Brug javascript til at indsætte et favicon - f.eks. det her http://hearthstoneapi.com/favicon.ico (I know...hvorfor ville man nogensinde gøre det irl...men for øvelsens skyld) */












/*5.1 Brug javascript til at gemme teksterne væk i artiklerne <p>-tags. Indsæt istedet link med "Læs mere..." */

//find det element i dom'en som skal manipuleres. 
let article = document.querySelectorAll('article p');

// Alle p-tags skal gemmes væk
article.forEach((p) => {
    p.style.display = 'none';
});

//indsæt et link med teksten "læs mere" der hvor teksten var før
article.forEach((p) => {
    let a = document.createElement('a');
    a.href = '#';
    a.textContent = 'Læs mere';
    p.insertAdjacentElement('afterend', a);
});

/*5.2. Sørg for at når man trykker på "Læs mere..." vises den oprindelige tekst ovenover "Læs mere..."  */
//fang alle "læs mere" links
let links = document.querySelectorAll('article a');

//når man klikker på "læs mere" skal teksten vises
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let p = e.target.previousElementSibling;
        p.style.display = 'block';
    });
});

/*5.3. Sørg for at "Læs mere..." bliver lavet om til "Læs mindre..." */
















/*6. Som I måske har lagt mærke til, er der en .crazyPopup box som står udenfor body (se i css...prøv f.eks. at ændre property "right" til value -200 og 0). Opgaven er at den nu "popper up" når personer har scrollet 100px ned og forsvinde igen når de scroller op under 100px igen  - lookie: https://drive.google.com/file/d/10aSqzcL3br8DU5AhggE54Pal0Z3s-x5y/view */
