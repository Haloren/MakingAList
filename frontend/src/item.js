class Item {
    
    constructor(item) {
        this.item = item;
        // console.log(this)
        this.renderItemObj()
    }

    static getAllItems(){
        api.getItems().then(items => items.forEach(item => new Item(item)))
    }

    renderItemObj = () => {
        const div = document.createElement('div')
        const button = document.createElement('button')
        const h3 = document.createElement('h3')
        const input = document.createElement('input')

        div.setAttribute('class', 'item')

        button.setAttribute('class', 'delete-btn')
        button.setAttribute('data-item-id', this.id)
        button.innerHTML = 'X'
        button.addEventListener('click', this.deleteItem)

        h3.setAttribute('class', 'content')
        h3.innerHTML = this.item.content

        input.setAttribute('type', 'checkbox')
        input.setAttribute('class', 'check-box')
    
        container.appendChild(div)
        div.appendChild(button)
        div.appendChild(h3)
        div.appendChild(input)
    }


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

        fetch(`${ITEMS_URL}/${this.id}`, configObj)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                console.log(this);
            });
    }

}
