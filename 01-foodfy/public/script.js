const modalOverlay = document.querySelector('.modal-overlay')
const receitas = document.querySelectorAll('.receita-card')

for (let receita of receitas) {
    receita.addEventListener('click', function() {
        let imgUrl = receita.querySelector('img').src
        let nome = receita.querySelector('h3').innerText
        let autor = receita.querySelector('h4').innerText

        modalOverlay.querySelector('img').src = imgUrl
        modalOverlay.querySelector('h2').innerText = nome
        modalOverlay.querySelector('h3').innerText = autor
        modalOverlay.classList.add('active')
    })    
}

modalOverlay.querySelector('#close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})