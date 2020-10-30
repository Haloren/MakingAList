class Item {

    static all = []

    constructor(item) {
        this.item = item;
        // console.log(this)
        this.renderItem() //this.renderItemObj()
        this.setEventListeners()

        this.constructor.all.push(this)
    }

    static getAllItems(){
        api.getItems().then(items => items.forEach(item => new Item(item)))
    }

    renderItem(){
        const itemObj = document.createElement('div')
        itemObj.setAttribute('class', 'item')
        itemObj.setAttribute('data-item-id', this.item.id)
        this.itemObj = itemObj
        
        this.renderInnerHTML()
        
        container.appendChild(itemObj)
    }
    renderInnerHTML(){
        this.itemObj.innerHTML = `
        <button class="delete-btn"">X</button>
        <h3 class="content" id="content">${this.item.content}</h3>
        <input type="checkbox" class="check-box">
        `
    }
//document.querySelector(".item").remove()
    setEventListeners(){
        console.log(this)
        // this.itemObj.getElementsByClassName("delete-btn").addEventListener('click', this.deleteItemObj)
        const fullItem = document.querySelector(".item")
    }
    deleteItem = () => {
        // ApiService.deleteItem(this.item.id).then(() => this.itemObj.remove())
    }

}
