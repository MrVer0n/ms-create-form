class AppState {
elem = null
stetchField = null
stetchForm = null
idForm = null
temp = [{}];
possbleValues = []
field = [
    {id:0, idForm: 0, activ: false, text: `Название` , isNeed: false, type: "text", typeRes: "tel", priority: "1", placeholder: "", possbleValues:[] },
    // {id:10, idForm: 0, activ: false, text: `Поле1` , isNeed: false, type: "text", typeRes: "tel", priority: "1", placeholder: ""},
    // {id:20, idForm: 0, activ: false, text: `Поле2` , isNeed: false, type: "text", typeRes: "tel", priority: "2", placeholder: ""},
    // {id:30, idForm: 0, activ: false, text: `Поле3` , isNeed: false, type: "text", typeRes: "tel", priority: "3", placeholder: ""},
    // {id:40, idForm: 0, activ: false, text: `Поле4` , isNeed: false, type: "text", typeRes: "tel", priority: "4", placeholder: ""},
    // {id:50, idForm: 0, activ: false, text: `Поле5` , isNeed: false, type: "text", typeRes: "tel", priority: "5", placeholder: ""},
    // {id:60, idForm: 0, activ: false, text: `Поле6` , isNeed: false, type: "text", typeRes: "tel", priority: "6", placeholder: ""},
    // {id:70, idForm: 0, activ: false, text: `Поле7` , isNeed: false, type: "text", typeRes: "tel", priority: "7", placeholder: ""},
    // {id:80, idForm: 0, activ: false, text: `Поле8` , isNeed: false, type: "text", typeRes: "tel", priority: "8", placeholder: ""},
    // {id:90, idForm: 0, activ: false, text: `Поле9` , isNeed: false, type: "text", typeRes: "tel", priority: "9", placeholder: ""},
    // {id:100, idForm: 0, activ: false, text: `Поле10` , isNeed: false, type: "text", typeRes: "tel", priority: "10", placeholder: ""},
    // {id:110, idForm: 0, activ: false, text: `Поле11` , isNeed: false, type: "text", typeRes: "tel", priority: "11", placeholder: ""},
    // {id:120, idForm: 0, activ: false, text: `Поле12` , isNeed: false, type: "text", typeRes: "tel", priority: "12", placeholder: ""},
    // {id:130, idForm: 0, activ: false, text: `Поле13` , isNeed: false, type: "text", typeRes: "tel", priority: "13", placeholder: ""},
    // {id:140, idForm: 0, activ: false, text: `Поле14` , isNeed: false, type: "text", typeRes: "tel", priority: "14", placeholder: ""},
    // {id:150, idForm: 0, activ: false, text: `Поле15` , isNeed: false, type: "text", typeRes: "tel", priority: "15", placeholder: ""},
    // {id:160, idForm: 0, activ: false, text: `Поле10` , isNeed: false, type: "text", typeRes: "tel", priority: "16", placeholder: ""},
    // {id:200, idForm: 0, activ: false, text: `Поле20` , isNeed: false, type: "text", typeRes: "tel", priority: "17", placeholder: ""},
    // {id:300, idForm: 0, activ: false, text: `Поле30` , isNeed: false, type: "text", typeRes: "tel", priority: "18", placeholder: ""},
    // {id:400, idForm: 0, activ: false, text: `Поле40` , isNeed: false, type: "text", typeRes: "tel", priority: "19", placeholder: ""},
    // {id:500, idForm: 0, activ: false, text: `Поле50` , isNeed: false, type: "text", typeRes: "tel", priority: "20", placeholder: ""},
    // {id:600, idForm: 0, activ: false, text: `Поле60` , isNeed: false, type: "text", typeRes: "tel", priority: "21", placeholder: ""},
    // {id:700, idForm: 0, activ: false, text: `Поле70` , isNeed: false, type: "text", typeRes: "tel", priority: "22", placeholder: ""},
    // {id:800, idForm: 0, activ: false, text: `Поле80` , isNeed: false, type: "text", typeRes: "tel", priority: "23", placeholder: ""},
    // {id:900, idForm: 0, activ: false, text: `Поле90` , isNeed: false, type: "text", typeRes: "tel", priority: "24", placeholder: ""},
    // {id:1000, idForm: 0, activ: false, text: `Поле100` , isNeed: false, type: "text", typeRes: "tel", priority: "25", placeholder: ""},
    // {id:1100, idForm: 0, activ: false, text: `Поле110` , isNeed: false, type: "text", typeRes: "tel", priority: "26", placeholder: ""},
    // {id:1200, idForm: 0, activ: false, text: `Поле120` , isNeed: false, type: "text", typeRes: "tel", priority: "27", placeholder: ""},
    // {id:1300, idForm: 0, activ: false, text: `Поле130` , isNeed: false, type: "text", typeRes: "tel", priority: "28", placeholder: ""},
    // {id:1400, idForm: 0, activ: false, text: `Поле140` , isNeed: false, type: "text", typeRes: "tel", priority: "29", placeholder: ""},
    // {id:1500, idForm: 0, activ: false, text: `Поле150` , isNeed: false, type: "text", typeRes: "tel", priority: "30", placeholder: ""},

];
form = [
    {id:0, name: `Форма для отзывов`, title:`Чтоб отзывы оставлять`},
    {id:1, name: `Форма1`, title:`Чтоб отзывы оставлять`},
    {id:2, name: `Форма2`, title:`Чтоб отзывы оставлять`},
    {id:3, name: `Форма3`, title:`Чтоб отзывы оставлять`},
    {id:4, name: `Форма4`, title:`Чтоб отзывы оставлять`},
    {id:5, name: `Форма5`, title:`Чтоб отзывы оставлять`},
    {id:6, name: `Форма6`, title:`Чтоб отзывы оставлять`},
    {id:7, name: `Форма7`, title:`Чтоб отзывы оставлять`},
    {id:8, name: `Форма8`, title:`Чтоб отзывы оставлять`},
    {id:9, name: `Форма9`, title:`Чтоб отзывы оставлять`},
    {id:10, name: `Форма10`, title:`Чтоб отзывы оставлять`},
    {id:11, name: `Форма11`, title:`Чтоб отзывы оставлять`},
    {id:12, name: `Форма12`, title:`Чтоб отзывы оставлять`},
    {id:13, name: `Форма13`, title:`Чтоб отзывы оставлять`},
    {id:14, name: `Форма14`, title:`Чтоб отзывы оставлять`},
    {id:15, name: `Форма15`, title:`Чтоб отзывы оставлять`},
    {id:100, name: `Форма17`, title:`Чтоб отзывы оставлять`},
    {id:200, name: `Форма18`, title:`Чтоб отзывы оставлять`},
    {id:300, name: `Форма19`, title:`Чтоб отзывы оставлять`},
    {id:400, name: `Форма20`, title:`Чтоб отзывы оставлять`},
    {id:500, name: `Форма21`, title:`Чтоб отзывы оставлять`},
    {id:600, name: `Форма22`, title:`Чтоб отзывы оставлять`},
    {id:700, name: `Форма23`, title:`Чтоб отзывы оставлять`},
    {id:800, name: `Форма24`, title:`Чтоб отзывы оставлять`},
    {id:900, name: `Форма25`, title:`Чтоб отзывы оставлять`},
    {id:1000, name: `Форма26`, title:`Чтоб отзывы оставлять`},
    {id:1100, name: `Форма27`, title:`Чтоб отзывы оставлять`},
    {id:1200, name: `Форма28`, title:`Чтоб отзывы оставлять`},
    {id:1300, name: `Форма29`, title:`Чтоб отзывы оставлять`},
    {id:1400, name: `Форма30`, title:`Чтоб отзывы оставлять`},
    {id:1500, name: `Форма31`, title:`Чтоб отзывы оставлять`},
    
];

getPossbleValues(){
    return this.possbleValues
}
setPossbleValues(x){
  this.possbleValues = x
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

getWhithIdFormFiledState(x){
    this.temp = [{}];
    this.field.forEach((field) =>{
        if(field.idForm===x){
            this.temp = this.temp.concat(field)
        }
    })
    this.temp.shift()
    return this.temp
}

setIdForm(x){
    if(x !== undefined){this.idForm=x}  
}
getIdForm(){
    return this.idForm
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