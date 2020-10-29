const BASE_URL = 'http://localhost:3000'
const LISTS_URL = `${BASE_URL}/lists`
const ITEMS_URL = `${BASE_URL}/items`

const title = document.querySelector('header')

const loadLists = () => {
    fetch(LISTS_URL)
    .then(resp => resp.json())
    .then(json => {
        renderList(json)
    })
}

const loadItems = () => {
    fetch(ITEMS_URL)
    .then(resp => resp.json())
    // .then(json => {
    //     console.log(json)
    // })
    .then(data => {
        data.forEach(item => {
            let itemObj = new Item(item.id, item.content); //creating object
            itemObj.renderItem(); // calling instance method on object
        })
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadLists();
    loadItems();
})

const renderList = (listList) => {
    const h1 = document.createElement('h1')

    h1.setAttribute('class', 'title')
    h1.setAttribute('id', 'title')

    h1.innerHTML = listList[0].name

    title.appendChild(h1)
}

const container = document.getElementById('items-container')
const addBtn = document.getElementById("add-btn") //.addEventListener('submit', createItem)