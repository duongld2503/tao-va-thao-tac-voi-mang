var array =  Array();
let x =0;

function Add() {
    array[x] = document.getElementById("txt").value;
    alert("da add");
    x++;
    document.getElementById("txt").value = "";
}

function Display() {
    let e = '';
    for (i=0;i<array.length;i++){
        e += array[i];
    }
    document.getElementById('resault').innerHTML = e;
}
