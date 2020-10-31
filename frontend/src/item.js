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
        itemObj.style.color = "#030b38" //var(--blk)
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

    setEventListeners(){
        container.addEventListener('click', this.handleClick)
    }

    handleClick = (e) => {
        const itemId = e.target.closest(".item").dataset.itemId

        if (e.target.classList.contains("check-box")){
            const blue = "#264ebb"
            const black = "#030b38"
            const fontColor = e.target.closest(".item")
            if (fontColor.style.color === blue) { 
                fontColor.style.color = black; 
            }else{
                fontColor.style.color = blue;
            }  
        }
        if (e.target.classList.contains("delete-btn")){
            api.destroyItem(itemId)
            e.target.parentElement.remove()
        }
    }
}
