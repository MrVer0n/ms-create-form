class AppState {
    elem = undefined
    temp = [{}]
    
    idForm = undefined
    field = [
        //{ 
        // id: 0, 
        // idForm: 0, 
        // isActive: true, 
        // title: 'Название', 
        // isRequire: false, 
        // inputType: 'text', 
        // priority: '1', 
        // placeHolder: '', 
        // possbleValues: [{ id: 1, title: 'test1' }, { id: 2, title: 'test2' }, { id: 3, title: 'test3' }]
        //}
]
    form = [

    ]
 

    //##########-FORM-##########
    setAllFromState(x){
        this.form = x
    }
    setFormState(x) {
        this.form = this.form.concat(x)
    }

    getFormState() {
        return this.form
    }

    delFormState(x) {
        this.form.forEach((value, key) => {
            if (value.id === x)
                delete this.form[key]
        })
        return this.form
    }

    editFormState(newElem) {
        this.form.forEach((form) => {
            if (form.id === newElem.id) {
                form.id = newElem.id
                form.name = newElem.name
                form.title = newElem.title
                form.userId = newElem.userId
            }
        })
    }

    getWithIdFormState(x) {
        this.form.forEach((form) => {
            if (form.id === x) {
                this.elem = form
            }
        })
        return this.elem
    }

    setIdForm(x) {
        if (x !== undefined) { this.idForm = x }
    }

    getIdForm() {
        return this.idForm
    }


    //##########-FIELD-##########

    setAllFieldState(x){
        this.field = x
    }

    setFieldState(x) {
        this.field = this.field.concat(x)
    }

    getFieldState() {
        return this.field
    }

    delFieldState(x) {
        this.field.forEach((value, key) => {
            if (value.id === x)
                delete this.field[key]
        })
        return this.field
    }

    editFieldState(newElem) {
        this.field.forEach((field) => {
            if (field.id === newElem.id) {
                field.title = newElem.title
                field.isActive = newElem.isActive
                field.isRequire = newElem.isRequire
                field.inputType = newElem.inputType
                field.priority = newElem.priority
                field.possbleValues = newElem.possbleValues
            }
        })
    }

    getWithIdFieldState(x) {
        this.field.forEach((field) => {
            if (field.id === x) {
                this.elem = field
            }
        })
        return this.elem
    }

    setAddFieldState(x) {
        this.field = x
    }

    getWhithIdFormFiledState(x) {
        this.temp = [{}]
        this.field.forEach((field) => {
            if (field.idForm === x) {
                this.temp = this.temp.concat(field)
            }
        })
        this.temp.shift()
        return this.temp
    }

}
export default new AppState()