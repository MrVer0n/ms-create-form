class AppState {
elem = null
stetch = null
field = [
    {id:0, activ: false, text: "Название" , need: false},

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

editfieldState(newelem){
    console.log(newelem);
    this.field.forEach((field) =>
    {if(field.id===newelem.id){
       this.field.text=newelem.text
       this.field.activ=newelem.activ
       this.field.need=newelem.need
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