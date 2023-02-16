export function generateDiv(information) {
    let div = document.createElement("h1");
    div.innerHTML = `The result is ${information}`;
    document.body.appendChild(div);
}