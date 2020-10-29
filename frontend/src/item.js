class Item {
    
    constructor(id, content) {
        this.id = id;
        this.content = content;
        console.log(this)
    }

    static getAllItems(){
        api.getItems().then(items => items.forEach(item => new Item(item)))
    }

    renderItem = () => {
        const div = document.createElement('div')
        const button = document.createElement('button')
        const h3 = document.createElement('h3')
        const input = document.createElement('input')
        const input2 = document.createElement('input')

        div.setAttribute('class', 'item')

        button.setAttribute('class', 'delete-btn')
        button.setAttribute('data-item-id', this.id)
        button.innerHTML = 'X'
        button.addEventListener('click', this.deleteItem)

        h3.setAttribute('class', 'content')
        h3.innerHTML = this.content

        // input.setAttribute('class', 'qty')
        // input.setAttribute('type', 'number')
        // input.setAttribute('value', '1')
        // input.innerHTML = '1'

        input2.setAttribute('type', 'checkbox')
        input2.setAttribute('class', 'check-box')
    
        container.appendChild(div)
        div.appendChild(button)
        div.appendChild(h3)
        div.appendChild(input)
        div.appendChild(input2)
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
        //     json.message ? alert(json.message) : renderItem(json)
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
