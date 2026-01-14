// Végtelen mértani sorozat megjelenítése
document.addEventListener('DOMContentLoaded', function() {
    const csuszka = document.getElementById('csuszka');
    const ertek = document.getElementById('ertek');
    const osszegElem = document.getElementById('osszeg');
    const vegtelenOsszegElem = document.getElementById('vegtelenoszeg');
    const tabla = document.getElementById('tabla');

    function updateSeries() {
        const p = parseFloat(csuszka.value);
        ertek.textContent = p.toFixed(2);
        // Véges összeg (10 tag)
        let sum = 0;
        let terms = [];
        for (let i = 0; i < 10; i++) {
            const term = Math.pow(p, i);
            sum += term;
            terms.push(term);
        }
        // Végtelen összeg
        let infiniteSum = Math.abs(p) < 1 ? (1 / (1 - p)) : null;

        osszegElem.innerHTML = `Véges összeg (10 tag): <b>${sum.toFixed(4)}</b>`;
        vegtelenOsszegElem.innerHTML = infiniteSum !== null ? `Végtelen összeg: <b>${infiniteSum.toFixed(4)}</b>` : '<span style="color:red">A végtelen összeg nem létezik!</span>';

        // Tagok listázása a táblázatban
        tabla.innerHTML = '';
        for (let i = 0; i < terms.length; i++) {
            const tr = document.createElement('tr');
            const tdHatvany = document.createElement('td');
            const tdErtek = document.createElement('td');
            tdHatvany.textContent = `p^${i}`;
            tdErtek.textContent = terms[i].toFixed(4);
            tr.appendChild(tdHatvany);
            tr.appendChild(tdErtek);
            tabla.appendChild(tr);
        }
    }
    csuszka.addEventListener('input', updateSeries);
    updateSeries();
});
