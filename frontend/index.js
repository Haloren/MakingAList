const api = new ApiService("http://localhost:3000")

const title = document.querySelector('header') //List Name will append here
const form = document.getElementById('add-item') // Add Item form
const container = document.getElementById('items-container') // Items in a list will append here

const itemFormInstance = new ItemForm
List.getAllLists()
Item.getAllItems()

//CHECKBOX TEXT COLOR = BLUE
// const checkBlue  = () => {
//     let blueText = document.getElementById("content");
//     if(blueText.style === "color:#264ebb") {
//         blueText.style = "color:#030b38"; //var(--blk)
//     } else {
//         blueText.style = "color:#264ebb" //var(--blu)
//     }
// }