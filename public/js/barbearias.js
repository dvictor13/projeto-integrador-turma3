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


const inputSelect = document.getElementById('departamentos');
const btnform = document.querySelector('.btnform')
const limpar = document.querySelector('.limpar')

btnform.addEventListener('click', event => {
    console.log(inputSelect.value)
    Array.from(ul.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputSelect.value))
    .forEach(todo => {
        todo.style.display = 'none'
    })
    Array.from(ul.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputSelect.value))
    .forEach(todo => {
        todo.style.display = 'flex'
    })

})

limpar.addEventListener('click', event =>{
    Array.from(ul.children)
    .forEach(todo => {
        todo.style.display = 'flex'
    })

    inputSelect.selectedIndex = 0
    input.value = ''
})
   