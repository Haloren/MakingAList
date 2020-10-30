class List {
    constructor(list){
        this.list = list
        // console.log(this)
        this.renderListObj()
    }
    static getAllLists(){
        api.getLists().then(names => names.forEach(name => new List(name)))
    }
    
    renderListObj = () => {
        const h1 = document.createElement('h1')
        h1.setAttribute('class', 'title')
        h1.setAttribute('id', 'title')
        h1.innerHTML = this.list.name

        title.appendChild(h1)
    }
}
