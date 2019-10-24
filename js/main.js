"use strict";
function work() {
    const SRC_STRING = document.getElementById('sourcestring').value;
    const CUT_STRING = document.getElementById('cutstring').value;
    const BEFORE = document.getElementById('before').checked;

    let pos = SRC_STRING.search(CUT_STRING);
    let front;
    let back;

    if (pos === -1) {
        document.getElementById('ausgabe').innerHTML = '<strong class="error">Zeichenkette nicht vorhanden!</strong>';
        return;
    } 

    if (BEFORE) {
        front = SRC_STRING.substring(0, pos);
        back = SRC_STRING.substring(pos, SRC_STRING.length);
    } else {
        front = SRC_STRING.substring(0, pos + CUT_STRING.length);
        back = SRC_STRING.substring(pos + CUT_STRING.length, SRC_STRING.length);
    }
    
    document.getElementById('ausgabe').innerHTML = `<h3>${front}</h3><h3>${back}</h3>`;
}