// Végtelen mértani sorozat megjelenítése
document.addEventListener('DOMContentLoaded', function() {
    const qSlider = document.getElementById('q');
    const qValue = document.getElementById('qErtek');
    const vegElem = document.getElementById('veg');
    const vegtelenElem = document.getElementById('vegtelen');
    const diagram = document.getElementById('diagram');

    // Csúszka minimum és maximum beállítása 0 és 1 közé
    qSlider.min = '0';
    qSlider.max = '1';
    qSlider.step = '0.01';
    if (parseFloat(qSlider.value) < 0 || parseFloat(qSlider.value) > 1) {
        qSlider.value = '0.5';
    }

    function updateSeries() {
        const q = parseFloat(qSlider.value);
        qValue.textContent = q.toFixed(2);
        // Véges összeg (10 tag)
        let sum = 0;
        let terms = [];
        for (let i = 0; i < 10; i++) {
            const term = Math.pow(q, i);
            sum += term;
            terms.push(term);
        }
        // Végtelen összeg
        let infiniteSum = Math.abs(q) < 1 ? (1 / (1 - q)) : null;

        vegElem.textContent = sum.toFixed(4);
        vegtelenElem.innerHTML = infiniteSum !== null ? `<span style="color:black;font-weight:bold;">${infiniteSum.toFixed(4)}</span>` : '<span class="hiba">A végtelen összeg nem létezik!</span>';

        // Oldalas oszlopdiagram kirajzolása, max szélesség limit, középre igazítás, szöveg balra
        diagram.innerHTML = '';
        const maxWidth = 400; // px
        const maxTerm = Math.max(...terms);
        for (let i = 0; i < terms.length; i++) {
            const div = document.createElement('div');
            div.className = 'oszlop';
            // Szélesség arányos, de max maxWidth px
            const width = maxTerm > 0 ? Math.max(terms[i] / maxTerm * maxWidth, 2) : 2;
            div.style.width = `${width}px`;
            div.style.height = '32px';
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.justifyContent = 'flex-start';
            div.style.background = '#4caf50';
            div.style.margin = '6px 0'; // balra igazítás
            div.style.borderRadius = '0 16px 16px 0';
            div.style.fontSize = '13px';
            div.style.color = 'white';
            div.style.paddingLeft = '10px'; // szöveg balra
            div.textContent = `q^${i} = ${terms[i].toFixed(4)}`;
            diagram.appendChild(div);
        }
        diagram.style.flexDirection = 'column';
        diagram.style.alignItems = 'flex-start'; // balra igazítás
    }
    qSlider.addEventListener('input', updateSeries);
    updateSeries();
});
