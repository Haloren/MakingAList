const BASE_URL = "http://localhost:3000"
// const LISTS_URL = `${BASE_URL}/lists`
const ITEMS_URL = `${BASE_URL}/items`

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
    input.setAttribute("value", "0")
    input.innerHTML = "1"

    p.setAttribute("class", "check-box")
    p.innerHTML = "✔️"

    container.appendChild(button)
    button.appendChild(h3)
    h3.appendChild(input)
    input.appendChild(p)

}