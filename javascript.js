let nimi = document.querySelector('#nimi');
const Liitu = document.querySelector('#salvesta');
const kaart = document.querySelector('#kaart');
let tekst = document.querySelector(`#tekst`);
const nupp = document.querySelector(`#Saada`);
const Saatmine = tekst.value;


nupp.addEventListener('click', async function () {
    const Saatmine = tekst.value;
    console.log(Saatmine);
})

player_key = localStorage.getItem('player_key');

Liitu.addEventListener('click', async function () {
    let eesnimi = nimi.value;
    console.log(eesnimi);

    const vastus = await fetch('https://tinkr.tech/sdb/Martin/wanderworld', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'join', username: eesnimi })
    });

    const andmed = await vastus.json();
    console.log(andmed);

    localStorage.setItem('player_key', andmed.player_key);
    player_key = andmed.player_key; 
});

setInterval(async function () {
    const vastus = await fetch('https://tinkr.tech/sdb/Martin/wanderworld');
    const olek = await vastus.json();

    kaart.innerHTML = '';

    for (const mangija of olek.players) {
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = mangija.x + 'px';
        div.style.top = mangija.y + 'px';

        const pilt = document.createElement('img');
        pilt.src = 'https://tinkr.tech' + mangija.image;
        pilt.width = 32;
        pilt.height = 32;
        pilt.style.imageRendering = 'pixelated';

        const name = document.createElement('p');
        name.textContent = mangija.username;

        div.appendChild(pilt);
        div.appendChild(name);
        kaart.appendChild(div);
    }
}, 1000);

kaart.addEventListener('click', async function (e) {
    let x = e.offsetX;
    let y = e.offsetY;
    const player_key = localStorage.getItem('player_key');

    const vastus = await fetch('https://tinkr.tech/sdb/Martin/wanderworld', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'move', player_key: player_key, x: x, y: y })
    });

    const andmed = await vastus.json();
    console.log(andmed);
});


