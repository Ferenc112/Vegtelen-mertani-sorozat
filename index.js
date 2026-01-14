const N = 10;
const diagram = document.getElementById("diagram");

function frissit() {
  const q = parseFloat(qInput.value);
  qErtek.textContent = q.toFixed(2);
  diagram.innerHTML = "";

  let vegesOsszeg = 0;

  for (let i = 0; i < N; i++) {
    const tag = Math.pow(q, i);
    vegesOsszeg += tag;

    const oszlop = document.createElement("div");
    oszlop.className = "oszlop";
    oszlop.style.height = Math.abs(tag) * 100 + "px";
    oszlop.textContent = tag.toFixed(2);
    diagram.appendChild(oszlop);
  }

  veg.textContent = vegesOsszeg.toFixed(4);

  if (Math.abs(q) < 1) {
    vegtelen.textContent = (1 / (1 - q)).toFixed(4);
    vegtelen.className = "";
  } else {
    vegtelen.textContent = "Nem létezik (|q| ≥ 1)";
    vegtelen.className = "hiba";
  }
}

const qInput = document.getElementById("q");
qInput.oninput = frissit;

frissit();