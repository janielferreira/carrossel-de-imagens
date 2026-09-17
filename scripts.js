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

    console.log(listItems)
    console.log(thumbItems)
}

