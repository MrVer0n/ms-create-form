class FormState {
    form = { responseBody: [] }
    response = []

    setFormState(x) {
        for (let i = 0; i < x.length; i++) {
            x[i].responseBody = []
        }
        this.form = x;
    }

    setResponseState(x) {
        this.response.splice(this.response.length, 0, x)
    }

    setResponseFormState() {
        this.form.forEach((form) => {
            this.response.forEach((response) => {
                if (form.id === response.id) {
                    form.responseBody = form.responseBody.concat(response)
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