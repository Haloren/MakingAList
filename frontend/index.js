const api = new ApiService("http://localhost:3000")

const blue = "rgb(38, 78, 187)" //"#264ebb"
const black = "rgb(3, 11, 56)" //"#030b38"

const title = document.querySelector('header') //List Name will append here
const form = document.getElementById('add-item') // Add Item form
const container = document.getElementById('items-container') // Items in a list will append here

const itemFormInstance = new ItemForm
List.getAllLists()
Item.getAllItems()

