import "./counter.scss";
const masBtn = document.querySelector('#suma');
const menosBtn = document.querySelector('#resta');
const resetBtn = document.querySelector('#clean');

let cuenta = 0


const menos = () => {
    cuenta--;
    document.querySelector("#display").innerHTML = cuenta;
}
const suma = () => {
    cuenta++;
    document.querySelector("#display").innerHTML = cuenta;
}
const resete = () => {
    cuenta = 0;
    document.querySelector("#display").innerHTML = cuenta;
}




window.onload = () => {

    masBtn.addEventListener('click', suma);
    menosBtn.addEventListener('click', menos);
    resetBtn.addEventListener('click', resete)

}