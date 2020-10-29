const BASE_URL = 'http://localhost:3000'
const LISTS_URL = `${BASE_URL}/lists`
const ITEMS_URL = `${BASE_URL}/items`




// LIST TITLE - MOVE THIS TO A NEW FILE AND MAKE INTO A CLASS
const title = document.querySelector('header')
document.addEventListener('DOMContentLoaded', () => loadLists())
const loadLists = () => {
    fetch(LISTS_URL)
    .then(resp => resp.json())
    .then(json => {
        renderLists(json)
    })
}
const renderLists = (listList) => {
    const h1 = document.createElement('h1')

    h1.setAttribute('class', 'title')
    h1.setAttribute('id', 'title')

    h1.innerHTML = listList[0].name

    title.appendChild(h1)
}



// ITEMS CONTAINER - MOVE THIS TO A NEW FILE AND MAKE INTO A CLASS
const container = document.getElementById('items-container')

document.addEventListener('DOMContentLoaded', () => loadItems())

const loadItems = () => {
    fetch(ITEMS_URL)
    .then(resp => resp.json())
    // .then(json => {
    //     console.log(json)
    // })
    .then(json => {
        json.forEach(item => renderItem(item))
    })
}
const renderItem = (itemList) => {
    const button = document.createElement('button')
    const h3 = document.createElement('h3')
    const input = document.createElement('input')
    const input2 = document.createElement('input')

    button.setAttribute('class', 'delete-btn')
    button.setAttribute('data-item-id', itemList.id)
    button.innerHTML = '❌'

    h3.setAttribute('class', 'item')
    h3.innerHTML = itemList.content
    
    input.setAttribute('class', 'qty')
    input.setAttribute('type', 'number')
    input.setAttribute('value', '1')
    input.innerHTML = '1'

    input2.setAttribute('type', 'checkbox')
    input2.setAttribute('class', 'check-box') //✔️

    container.appendChild(button)
    container.appendChild(h3)
    container.appendChild(input)
    container.appendChild(input2)

}
