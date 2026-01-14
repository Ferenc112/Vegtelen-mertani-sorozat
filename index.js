// Végtelen mértani megjelenítése
document.addEventListener('DOMContentLoaded', function() {
    const qSlider = document.getElementById('q-slider');
    const qValue = document.getElementById('q-value');
    const seriesInfo = document.getElementById('series-info');
    const termsList = document.getElementById('terms-list');

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

        // Sorozat képlet
        let formula = 'Sorozat: 1 + q + q² + q³ + ...';
        let finiteSumText = `Véges összeg (10 tag): <b>${sum.toFixed(4)}</b>`;
        let infiniteSumText = infiniteSum !== null ? `Végtelen összeg: <b>${infiniteSum.toFixed(4)}</b>` : '<span style="color:red">A végtelen összeg nem létezik!</span>';
        seriesInfo.innerHTML = `<b>${formula}</b><br>${finiteSumText}<br>${infiniteSumText}`;
        // Tagok listázása
        termsList.innerHTML = '';
        for (let i = 0; i < terms.length; i++) {
            const li = document.createElement('li');
            li.textContent = `q^${i} = ${terms[i].toFixed(4)}`;
            li.style.background = '#4caf50';
            li.style.color = 'white';
            li.style.margin = '6px 0';
            li.style.padding = '6px';
            li.style.borderRadius = '5px';
            li.style.width = `${120 + terms[i]*180}px`;
            termsList.appendChild(li);
        }
    }
    qSlider.addEventListener('input', updateSeries);
    updateSeries();
});
