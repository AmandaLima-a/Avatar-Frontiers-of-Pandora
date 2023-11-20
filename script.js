const modal = document.getElementById("meuModal")

const button = document.getElementById("buttonTrailer")

const span = document.getElementsByClassName("fechar")[0]

button.onclick = function() {
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}