class AppState {
    elem = null
    temp = [{}]
    
    idForm = null
    field = [{ 
        id: 0, 
        idForm: 0, 
        activ: true, 
        text: 'Название', 
        isNeed: false, 
        type: 'text', 
        typeRes: 'radio', 
        priority: '1', 
        placeholder: '', 
        possbleValues: [{ id: 1, title: 'test1' }, { id: 2, title: 'test2' }, { id: 3, title: 'test3' }]
    }]
    form = [{ 
        id: 0, 
        name: 'Форма для отзывов', 
        title: 'чтобы отзывы оставлять' 
    }]
 

    //##########-FORM-##########

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
                field.text = newElem.text
                field.activ = newElem.activ
                field.isNeed = newElem.isNeed
                field.type = newElem.type
                field.typeRes = newElem.typeRes
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