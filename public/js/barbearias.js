
const input = document.getElementById('nome');
const ul = document.querySelector(".cards-container");

input.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    Array.from(ul.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.style.display = 'none'
    })
    Array.from(ul.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.style.display = 'flex'
    })

})
   