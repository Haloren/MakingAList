class ApiService {
    constructor(root) {
        this.root = root
    }

    getLists = () => fetch(`${this.root}/lists`).then(resp => resp.json())




}