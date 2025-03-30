const notescont = document.querySelector('.notes-container');
const btnfornote = document.querySelector('#btn');

let notes = document.querySelectorAll('.input-box');
function updatestorage() {
    localStorage.setItem("notes", notescont.innerHTML);
}
btnfornote.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notescont.appendChild(inputbox).appendChild(img);
})

notescont.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updatestorage();
    }
    // else{

    // }

})