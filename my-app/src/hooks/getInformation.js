import React from 'react';
import datos from './datos';


function getDatos() {
    let userValue = document.getElementById("accUser").value;
    let DesValue = document.getElementById("accDescription").value;
    // let detro de función no tiene scope global
    let agrega = datos.push(userValue);
    let agrega2 = datos.push(DesValue);
}


export default getDatos;