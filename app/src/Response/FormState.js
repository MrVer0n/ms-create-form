class FormState {
    form = { responseBody:[] }
    response = []
    id=0;
    setFormState(x) {
        this.form = x;
        for (let i = 0; i < x.length; i++) {
            if(this.form[i] !== undefined){
                this.form[i].responseBody = []
            }
        }
    }

    setResponseState(x) {
        if(x.id <= 1000){
            this.id=x.id
        }else{
            x.id=this.id+1
        }
        this.response.splice(this.response.length, 0, x)
    }

    setResponseFormState() {
        this.form.forEach((form) => {
            this.response.forEach((response) => {
                if (form.id === response.id) {
                    form.responseBody.splice(form.responseBody.length, 0, response)
                }
            })

        })
        this.response = []
    }

    getFormState() {
        return this.form
    }

}
export default new FormState()