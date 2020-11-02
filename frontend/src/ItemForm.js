class ItemForm {

    constructor(){
        this.addEventListeners()
    }

    addEventListeners(){
        form.addEventListener('submit', this.handleSubmit); 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target, this)
        // console.log(this.getFormData(e.target))
        const data = this.getFormData(e.target)
        // api.postItem(data).then(console.log)
        api.postItem(data).then(item => new Item(item)) // if statement to handle undefined

        form.reset()
    }

    getFormData = (form) => {
        return {content: form.name.value}
    }
}
