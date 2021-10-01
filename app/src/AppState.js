class AppState {
elem = null
stetch = null
field = [
    {id:0, activ: false, text: `Название` , isNeed: false, type: "text", typeRes: "tel", priority: "1"},

];

getReadstetchState() {
    return this.stetch
} 

getstetchState() {
    this.stetch = this.stetch+1
    return this.stetch
}

setfieldState(X) {
this.field = this.field.concat(X)
}

getfieldState() {
return this.field
}

getwithidfieldState(x){
    this.field.forEach((field) =>
        {if(field.id===x){
            this.elem = field
            }
        }
    )
return this.elem
}

editfieldState(newElem){
    this.field.forEach((field) =>
    {if(field.id===newElem.id){
       this.field.text=newElem.text
       this.field.activ=newElem.activ
       this.field.isNeed=newElem.isNeed
       this.field.type=newElem.type
       this.field.typeRes=newElem.typeRes
       this.field.priority=newElem.priority
        }
    }
)
}

delfieldState(x) {
    this.field.forEach((value, key) => {
        if(value.id === x)
            delete this.field[key]
    })
    }
}
export default new AppState()