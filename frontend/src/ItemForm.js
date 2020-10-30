class ItemForm {

    constructor(){
        this.addEventListeners()
    }

    addEventListeners(){
        form.addEventListener('submit', this.handleSubmit); 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target, this)
    }

}
