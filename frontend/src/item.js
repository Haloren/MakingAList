class Item {

    static all = []
    static sort = "alphabetical"
    // static filter = "all"
    // static search =""

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
        itemObj.style.color = `${black}` 
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

        if (e.target.classList.contains("delete-btn")){
            api.destroyItem(itemId).then(resp => resp.ok)
            this.itemObj.remove()
        }

        if (e.target.classList.contains("check-box")){
            const fontColor = e.target.closest(".item")
            const deleteDecoration = e.target.closest(".delete-btn")
            if (fontColor.style.color === black) { 
                fontColor.style.color = blue; 
                fontColor.style.textDecoration = "line-through";
            }else{
                fontColor.style.color = black;
                fontColor.style.textDecoration = "";
            }  
        }
    }

    // static findById(id){
    //     // console.log(id)
    //     return this.all.find(itemInstance => itemInstance.item.id === parseInt(id))
    // }
    static filterItems(){
        // return this.all.filter(itemInstance => itemInstance.item.content.include("Kale"))
    }

    static sortItems(){
        localeCompare()
        if (this.sort === "alphabetical"){
            return [...this.all].sort((itemA, itemB) => itemA.item.content.localeCompare(itemB.item.content))
        }
    }

    static renderAllItems(){
        container.innerHTML = ""
        this.sortItems().forEach(itemCard = itemCard.renderItem())
    }
}
