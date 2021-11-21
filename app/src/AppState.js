class AppState {
    elem = undefined
    temp = [{}]
    idForm = undefined
    field = []
    form = []

    //##########-FORM-##########

    setAllFromState(x) {
        this.form = x
    }
    setFormState(x) {
        this.form = this.form.concat(x)
    }

    getFormState() {
        return this.form
    }
    getWithIdFormState(x) {
        this.form.forEach((form) => {
            if (form.id === x) {
                this.elem = form
            }
        })
        return this.elem
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

    setIdForm(x) {
        if (x !== undefined) { this.idForm = x }
    }

    getIdForm() {
        return this.idForm
    }


    //##########-FIELD-##########

    setAllFieldState(x) {
        this.field = x
    }
    setFieldState(x) {
        this.field = this.field.concat(x)
    }

    getFieldState() {
        return this.field
    }
    getWithIdFieldState(x) {
        this.field.forEach((field) => {
            if (field.id === x) {
                this.elem = field
            }
        })
        return this.elem
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
        return this.field
    }
   

}
export default new AppState()