class List {
    constructor(name){
        this.name = name
        // console.log(this)
        this.renderListObj()
    }

    static getAllLists(){
        api.getLists().then(names => names.forEach(name => new List(name)))
    }

    renderListObj(){
        const listObj = document.createElement('h1')
        listObj.classList.add('title') 
        listObj.setAttribute('id', 'title')
        this.listObj = listObj
        listObj.innerHTML = this.name.name

        title.appendChild(listObj)
    }

}
