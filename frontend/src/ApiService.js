class ApiService {
    constructor(root) {
        this.root = root
    }
    getLists = () => fetch(`${this.root}/lists`).then(resp => resp.json()) // API LISTS

    getItems = () => fetch(`${this.root}/items`).then(resp => resp.json()) // API ITEMS
    
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
    }
    
    destroyItem = (id) => {
        return fetch(`${this.root}/items/${id}`, {
            method: 'DELETE',
        })      
    }
}
