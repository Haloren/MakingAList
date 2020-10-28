const BASE_URL = "http://localhost:3000"
const LISTS_URL = `${BASE_URL}/lists`
const ITEMS_URL = `${BASE_URL}/items`





const title = document.querySelector("header")
document.addEventListener("DOMContentLoaded", () => loadLists())
const loadLists = () => {
    fetch(LISTS_URL)
    .then(resp => resp.json())
    .then(json => {
        renderLists(json)
    })
}
const renderLists = (listList) => {
    const h1 = document.createElement("h1")

    h1.setAttribute("class", "title")
    h1.setAttribute("id", "title")

    h1.innerHTML = listList[0].name

    title.appendChild(h1)
}























const container = document.getElementById("items-container")

document.addEventListener("DOMContentLoaded", () => loadItems())

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
    const button = document.createElement("button")
    const h3 = document.createElement("h3")
    const input = document.createElement("input")
    const p = document.createElement("p")

    button.setAttribute("class", "delete-btn")
    button.setAttribute("data-item-id", itemList.id)
    button.innerHTML = "❌"

    h3.setAttribute("class", "item")
    h3.innerHTML = itemList.content
    
    input.setAttribute("class", "qty")
    input.setAttribute("type", "number")
    input.setAttribute("value", "1")
    input.innerHTML = "1"

    p.setAttribute("class", "check-box")
    p.innerHTML = "✔️"

    container.appendChild(button)
    button.appendChild(h3)
    h3.appendChild(input)
    input.appendChild(p)

}