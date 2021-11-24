class AppState {
    elem = undefined
    temp = [{}]
    idForm = undefined
    field = []
    form = []
    data = [
        {
             id : 10,
             responseBody : [
                {
                     id : 54,
                     title :  'Название' ,
                     idForm : 42,
                     isActive : true,
                     priority : 1,
                     inputType :  'text' ,
                     isRequire : true,
                     placeHolder :  "" ,
                     responseBody : {
                         id : 54,
                         data : ' 24.11.2021, 14:37:45' ,
                         value :  "Защитники" 
                    },
                     possbleValues : []
                },
                {
                     id : 55,
                     title :  "Отзыв" ,
                     idForm : 42,
                     isActive : true,
                     priority : 2,
                     inputType :  "textarea" ,
                     isRequire : false,
                     placeHolder :  "" ,
                     responseBody : {
                         id : 55,
                         data :  "24.11.2021, 14:37:45" ,
                         value :  "Отстой" 
                    },
                     possbleValues : []
                },
                {
                     id : 56,
                     title :  "Рейтинг" ,
                     idForm : 42,
                     isActive : true,
                     priority : 3,
                     inputType :  "radio" ,
                     isRequire : false,
                     placeHolder :  "" ,
                     responseBody : {
                         id : 56,
                         data :  "24.11.2021, 14:37:45" ,
                         value :  1 
                    },
                     possbleValues : [
                        {
                             id : 16377391122,
                             title :  1 
                        },
                        {
                             id : 16377391150,
                             title :  2 
                        },
                        {
                             id : 16377391161,
                             title :  3 
                        },
                        {
                             id : 16377391172,
                             title :  4 
                        },
                        {
                             id : 16377391189,
                             title :  5 
                        }
                    ]
                },
            ]
        },
        {
             id : 11,
             responseBody : [
                {
                     id : 54,
                     title :  "Название" ,
                     idForm : 42,
                     isActive : true,
                     priority : 1,
                     inputType :  "text" ,
                     isRequire : true,
                     placeHolder : ""  ,
                     responseBody : {
                         id : 54,
                         data :  "24.11.2021, 14:45:58" ,
                         value :  "Защитники" 
                    },
                     possbleValues : []
                },
                {
                     id : 55,
                     title :  "Отзыв" ,
                     idForm : 42,
                     isActive : true,
                     priority : 2,
                     inputType :  "textarea" ,
                     isRequire : false,
                     placeHolder :  "" ,
                     responseBody : {
                         id : 55,
                         data :  "24.11.2021, 14:45:58" ,
                         value :  "Фууу" 
                    },
                     possbleValues : []
                },
                {
                     id : 56,
                     title :  "Рейтинг" ,
                     idForm : 42,
                     isActive : true,
                     priority : 3,
                     inputType :  "radio" ,
                     isRequire : false,
                     placeHolder :  "" ,
                     responseBody : {
                         id : 56,
                         data :  "24.11.2021, 14:45:58" ,
                         value :  1 
                    },
                     possbleValues : [
                        {
                             id : 16377391122,
                             title :  1 
                        },
                        {
                             id : 16377391150,
                             title :  2 
                        },
                        {
                             id : 16377391161,
                             title :  3 
                        },
                        {
                             id : 16377391172,
                             title :  4 
                        },
                        {
                             id : 16377391189,
                             title :  5 
                        }
                    ]
                }
            ]
        },
        {
             id : 12,
             responseBody : [
                {
                     id : 54,
                     title :  "Название" ,
                     idForm : 42,
                     isActive : true,
                     priority : 1,
                     inputType :  "text" ,
                     isRequire : true,
                     placeHolder : ""  ,
                     responseBody : {
                         id : 54,
                         data :  "24.11.2021, 14:46:12" ,
                         value :  'Интерстеллар'  
                    },
                     possbleValues : []
                },
                {
                     id : 55,
                     title :  "Отзыв" ,
                     idForm : 42,
                     isActive : true,
                     priority : 2,
                     inputType :  "textarea" ,
                     isRequire : false,
                     placeHolder :  "" ,
                     responseBody : {
                         id : 55,
                         data :  "24.11.2021, 14:46:12" ,
                         value :  "Ваууу" 
                    },
                     possbleValues : []
                },
                {
                     id : 56,
                     title :  "Рейтинг" ,
                     idForm : 42,
                     isActive : true,
                     priority : 3,
                     inputType :  "radio" ,
                     isRequire : false,
                     placeHolder :  "" ,
                     responseBody : {
                         id : 56,
                         data :  "24.11.2021, 14:46:12" ,
                         value :  5 
                    },
                     possbleValues : [
                        {
                             id : 16377391122,
                             title :  1 
                        },
                        {
                             id : 16377391150,
                             title :  2 
                        },
                        {
                             id : 16377391161,
                             title :  3 
                        },
                        {
                             id : 16377391172,
                             title :  4 
                        },
                        {
                             id : 16377391189,
                             title :  5 
                        }
                    ]
                }
            ]
        }
    ]
    getData(){
        return this.data
    }
    delDataState(x) {
        this.data.forEach((value, key) => {
            if (value.id === x)
                delete this.data[key]
        })
        return this.data
    }

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