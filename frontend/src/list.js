class List {
    constructor(list){
        this.list = list
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
        listObj.innerHTML = this.list.name

        title.appendChild(listObj)
    }

}
