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

    deleteItem = () => {
        api.destroyItem(this.item.id).then(resp => resp.ok && this.item.remove())
    }

    setEventListeners(){
        container.addEventListener('click', this.handleClick)
        // container.querySelector(".item").addEventListener('click', this.handleClick)
    }

    handleClick = (e) => {
        if (e.target.classList.contains("check-box")){
            // console.log("check-box")
            // e.target.parentElement.dataset
        }
        if (e.target.classList.contains("delete-btn")){
            // this.deleteItem()
            e.target.parentElement.remove()
        }
    }
}
