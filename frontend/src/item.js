class Item {
    constructor(item, id) {
        this.item = item;
        this.id = id;
        // console.log(this)
        this.renderItemObj()
    }
    static getAllItems(){
        api.getItems().then(items => items.forEach(item => new Item(item)))
    }

    renderItemObj = () => {
        const div = document.createElement('div')
        div.setAttribute('class', 'item')
        div.setAttribute('data-item-id', this.item.id)

        const button = document.createElement('button')
        button.setAttribute('class', 'delete-btn')
        button.innerHTML = 'X'
        button.addEventListener('click', this.deleteItem) // *EventListener
        
        const h3 = document.createElement('h3')
        h3.setAttribute('class', 'content')
        h3.innerHTML = this.item.content

        const input = document.createElement('input')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('class', 'check-box')
    
        container.appendChild(div)
        div.appendChild(button)
        div.appendChild(h3)
        div.appendChild(input)
    }

    // renderItemObj = () => {
    //     const itemObj = document.createElement('div')
    //     itemObj.setAttribute('class', 'item')
    //     itemObj.setAttribute('data-item-id', this.item.id)
    //     this.itemObj = itemObj
    //     this.renderInnerHTML()
    //     container.appendChild(itemObj)
    // }
    //     renderInnerHTML = () => {
    //         const { button, content, checkbox } = this.item
    //         this.itemObj.innerHTML = `
    //         <button class='delete-btn'> X </button>
    //         <h3 class='content'>${this.item.content}</h3>
    //         <input type="checkbox" class="check-box"></input>
    //         `
    //     }
    // static deleteEventListener(){
    //     button.addEventListener('click', this.deleteItem)
    // }

    createItem = (e) => {
        e.preventDefault()
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
            // body: JSON.stringify({})
        }
        // fetch(ITEMS_URL, configObj)
        // .then(resp = resp.json())
        // .then(json =>
        //     json.message ? alert(json.message) : renderItemObj(json)
        // )
    }
    

    deleteItem = (e) => {
        // WORKFLOW
        // FIRST WE NEED TO DELETE FROM DATABASE
        // CONFIRM THAT IT HAS BEEN DELETED FROM THE DATABASE
        // IF YES => DELETE FROM FRONT END
        // IF NOT => DISPLAY ERROR MSG

        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        }
        fetch(`${api.root}/items/${this.item.id}`, configObj)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                console.log(this);
            });
    }

}
