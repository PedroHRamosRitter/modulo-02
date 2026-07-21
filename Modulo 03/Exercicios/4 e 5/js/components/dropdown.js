const dropdown = document.querySelector('.dropdown_avaliacoes')
dropdown.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault()
    dropdown.classList.toggle('ativo')
})

document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown_avaliacoes')) {
        dropdown.classList.remove('ativo')
    }
})