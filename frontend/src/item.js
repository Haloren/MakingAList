class Item {

    static all = []

    constructor(item, id) {
        this.item = item;
        this.id = id;
        // console.log(this)
        this.renderItemObj()

        this.constructor.all.push(this)
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
        h3.setAttribute('id', 'content')
        h3.innerHTML = this.item.content

        const input = document.createElement('input')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('class', 'check-box')
        // input.setAttribute('onclick', 'checkBlue()')
    
        container.appendChild(div)
        div.appendChild(button)
        div.appendChild(h3)
        div.appendChild(input)
    }

    // deleteItem = (e) => {
    //     const configObj = {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept':'application/json'
    //         }
    //     }
    //     fetch(`${api.root}/items/${this.item.id}`, configObj)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             console.log(data);
    //             console.log(this);
    //         });
    // }
    // static findById(id){
    //     return this.all.find(itemContainer => itemContainer.item.id === parseInt(id))
    // }
}
