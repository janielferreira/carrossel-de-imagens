let btnNext = document.querySelector(".next")
let btnBack = document.querySelector(".back")

let container = document.querySelector(".container")
let list = document.querySelector(".container .list")
let thumb = document.querySelector(".container .thumb")

btnNext.onclick = () => MovimentoAoClicar("next")
btnBack.onclick = () => MovimentoAoClicar("back")

function MovimentoAoClicar(type) {

    let listItems = document.querySelectorAll(".list .list-item")
    let thumbItems = document.querySelectorAll(".thumb .thumb-item")

    if(type === "next") {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add("animation-next")
    } else {
        list.prepend(listItems[3])
        thumb.prepend(thumbItems[3])
        container.classList.add("animation-back")
    }

    setTimeout(() => {
        container.classList.remove("animation-next")
        container.classList.remove("animation-back")
    }, 3000);
}

