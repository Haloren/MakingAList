class ApiService {
    constructor(root) {
        this.root = root
    }
    getLists = () => fetch(`${this.root}/lists`).then(resp => resp.json())

    getItems = () => fetch(`${this.root}/items`).then(resp => resp.json())
    postItem = (item) => {
        return fetch(`${this.root}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
            },
            body: JSON.stringify(item),
        })
        .then(resp => resp.json())
        // .then(data =>
        //     data.message ? alert(data.message) : renderItemObj(data);
        // )
    }
    deleteItem = () => {
        return fetch(`${api.root}/items/${this.item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        })
        .then(resp => resp.json())       
        // .then(data => {
        // console.log(data);
        // console.log(this);
        // });
    }
}
