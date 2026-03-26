const eesnimi = document.querySelector('#nimi');
const Sisesta = document.querySelector('#salvesta');

let eesnimi = "";

Sisesta.addEventListener('click', function() {
    eesnimi = nimi.value;
    save(eesnimi);
    console.log(sisesta);

});

async function save(name, place) {
    const response = await fetch('tinkr.tech/sdb/Martin/mang', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nimi.value})
    });
}
console.log(data);


























