class AppState {
    elem = null
    stetchField = null
    stetchForm = null
    idForm = null
    temp = [{}]
    idTempParam = 1
    tempParam = [{
        id: 1,
        title: '',
        check: false,
    }]
    field = [

        { id: 0, idForm: 0, activ: false, text: 'Название', isNeed: false, type: 'text', typeRes: 'tel', priority: '1', placeholder: '', possbleValues:[] },

    ]
    form = [

        { id: 0, name: 'Форма для отзывов', title: 'чтобы отзывы оставлять' },

    ]

    getIdTempParam(){
        this.idTempParam++
        return this.idTempParam
    }

    setTempParam(x){
        this.tempParam = x
    }
    getTempParam(){
        return this.tempParam
    }
    resetTempParam(){
        this.tempParam = [{
            id: 1,
            title: '',
            check: false,
        }]
    }
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
                this.form.id = newElem.id
                this.form.name = newElem.name
                this.form.title = newElem.title
                this.form.userId = newElem.userId
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
                this.field.text = newElem.text
                this.field.activ = newElem.activ
                this.field.isNeed = newElem.isNeed
                this.field.type = newElem.type
                this.field.typeRes = newElem.typeRes
                this.field.priority = newElem.priority
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


    //##########-STETCH-##########

    setStetchFieldState() {
        this.stetchField = this.stetchField + 1
        return this.stetchField
    }


    getStetchFieldState() {
        return this.stetchField
    }


    setStetchFormState() {
        this.stetchField = this.stetchField + 1
        return this.stetchField
    }


    getStetchFormState() {
        return this.stetchField
    }
}
export default new AppState()