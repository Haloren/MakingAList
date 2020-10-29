class ApiService {
    constructor(root) {
        this.root = root
    }

    getLists = () => fetch(`${this.root}/lists`).then(resp => resp.json())

    getItems = () => fetch(`${this.root}/items`).then(resp => resp.json())

}