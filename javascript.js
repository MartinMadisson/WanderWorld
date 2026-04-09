let nimi = document.querySelector('#nimi');
const Liitu = document.querySelector('#salvesta');
const kaart = document.querySelector('#kaart');

Liitu.addEventListener('click', async () => {
    let eesnimi = nimi.value;
    console.log(eesnimi);

    const vastus = await fetch('https://tinkr.tech/sdb/Martin/wanderworld', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({action: 'join', username: eesnimi })
    });

    const andmed = await vastus.json();
    console.log(andmed);

    localStorage.setItem('playerkey', andmed.player_key);
    localStorage.setItem('username', eesnimi);
});
setInterval(async function() {
    const vastus = await fetch('https://tinkr.tech/sdb/Martin/wanderworld', {
        method: 'GET'
    });
    const olek = await vastus.json();
    console.log(olek);

    kaart.innerHTML = '';

    for (const mangja of olek.players) {
        const div = document.createElement('img');  
        div.style.position = 'absolute';
        div.style.left = mangja.x + 'px';
        div.style.top = mangja.y + 'px';
    }     kaart.appendChild(div);