class FormState {
    form = { responseBody:[] }
    response = []

    setFormState(x) {
        this.form = x;
        for (let i = 0; i < x.length; i++) {
            if(this.form[i] !== undefined){
                this.form[i].responseBody = []
            }
        }
        console.log(this.form);
    }

    setResponseState(x) {
        this.response.splice(this.response.length, 0, x)
    }

    setResponseFormState() {
        this.form.forEach((form) => {
            this.response.forEach((response) => {
                if (form.id === response.id) {
                    form.responseBody = response
                }
            })

        })
        this.response = []
        console.log(this.form);
    }

    getFormState() {
        return this.form
    }

}
export default new FormState()