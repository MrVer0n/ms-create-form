class AppState {
elem = null
stetch = null
field = [
    {id:0, activ: false, text: `Название` , isNeed: false, type: "text", typeRes: "tel", priority: "1"},

];
form = [
    {id:0, name: `Название`, title:`Что-то`, userID: "1"},
];


getReadstetchState() {
    return this.stetch
} 

getStetchState() {
    this.stetch = this.stetch+1
    return this.stetch
}

setFieldState(X) {
    this.field = this.field.concat(X)
}

getFieldState() {
    return this.field
}

setAddFieldState(X) {
    this.field = X
}

getWithIdFieldState(x){
    this.field.forEach((field) =>
        {if(field.id===x){
            this.elem = field
            }
        })
    return this.elem
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

delFieldState(x) {
    this.field.forEach((value, key) => {
        if(value.id === x)
            delete this.field[key]
    })
}

}
export default new AppState()