class AppState {
elem = null
stetchField = null
stetchForm = null
field = [
    {id:0, activ: false, text: `Название` , isNeed: false, type: "text", typeRes: "tel", priority: "1"},

];
form = [
    {id:0, name: `Форма для отзывов`, title:`Что-то`, userId: 0},
];


//##########-FORM-##########
setFormState(x) {
    this.form = this.form.concat(x)
}
getFormState() {
    return this.form
}
delFormState(x) {
    this.form.forEach((value, key) => {
        if(value.id === x)
            delete this.form[key]
    })
}
editFormState(newElem){
    this.form.forEach((form) =>
    {if(form.id===newElem.id){
       this.form.id=newElem.id
       this.form.name=newElem.name
       this.form.title=newElem.title
       this.form.userId=newElem.userId
        }
    })
}
getWithIdFormState(x){
    this.form.forEach((form) =>
        {if(form.id===x){
            this.elem = form
            }
        })
    return this.elem
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
        if(value.id === x)
            delete this.field[key]
    })
}
editFieldState(newElem){
    this.field.forEach((field) =>
    {if(field.id===newElem.id){
       this.field.text=newElem.text
       this.field.activ=newElem.activ
       this.field.isNeed=newElem.isNeed
       this.field.type=newElem.type
       this.field.typeRes=newElem.typeRes
       this.field.priority=newElem.priority
        }
    })
}
getWithIdFieldState(x){
    this.field.forEach((field) =>
        {if(field.id===x){
            this.elem = field
            }
        })
    return this.elem
}

setAddFieldState(x) {
    this.field = x
}


//##########-STETCH-##########
setStetchFieldState() {
    this.stetchField = this.stetchField+1
    return this.stetchField
}
getStetchFieldState() {
    return this.stetchField
} 

setStetchFormState() {
    this.stetchField = this.stetchField+1
    return this.stetchField
}
getStetchFormState() {
    return this.stetchField
} 

}
export default new AppState()