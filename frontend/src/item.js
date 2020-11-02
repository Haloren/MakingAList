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

    setEventListeners = () =>{
        this.itemObj.addEventListener('click', this.handleClick)
    }

    handleClick = (e) => {
        // console.log(this)
        const itemId = this.item.id
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
            api.destroyItem(itemId).then(resp => resp.ok)

            // remove from all array?
            // const index = Item.all.indexOf(this)
            // Item.all.splice(index, 1)

            this.itemObj.remove()
        }
    }
    
}

//Item.all.find(itemInstance => itemInstance.item.id === 53)
//Item.all.filter(itemInstance => ItemInstance.item.content.include(“Kale”))
//Item.all.find(itemInstance => itemInstance.item.id === 53).itemObj.remove()
