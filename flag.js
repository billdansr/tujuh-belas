const bendera = document.getElementById('bendera');

const cols = 75;
const rowsTop = 25;
const rowsBottom = 25;

const generateUnitTop = (colNum) => {
    const unitBenderaAtas = document.createElement('div');
    unitBenderaAtas.classList.add('unit-bendera-atas');
    unitBenderaAtas.style.setProperty('animation-delay', `${colNum * 10}ms`);
    unitBenderaAtas.style.setProperty('--displacement', `${colNum}px`);
    
    const unitKolom = document.getElementById(`kolom-${colNum}`);
    unitKolom.appendChild(unitBenderaAtas);
};

const generateUnitBottom = (colNum) => {
    const unitBenderaBawah = document.createElement('div');
    unitBenderaBawah.classList.add('unit-bendera-bawah');
    unitBenderaBawah.style.setProperty('animation-delay', `${colNum * 10}ms`);
    unitBenderaBawah.style.setProperty('--displacement', `${colNum}px`);

    const unitKolom = document.getElementById(`kolom-${colNum}`);
    unitKolom.appendChild(unitBenderaBawah);
};

for (i = 0; i < cols; i++) {
    const kolom = document.createElement('div');
    kolom.classList.add('kolom');
    kolom.setAttribute('id', `kolom-${i}`);
    bendera.appendChild(kolom);
    for (j = 0; j < rowsTop; j++) {
        generateUnitTop(i);
    }
    for (k = 0; k < rowsBottom; k++) {
        generateUnitBottom(i);
    }
}