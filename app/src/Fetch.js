const firstUrl = 'http://localhost:8080'
const token = 'YourTar ee144968a86f120aa44fc9675911a3f7e658da90c15e37945e46ec82b15c66f0f3d657a0c7bd783122d44127334d6b705ce186325efc2f6f0d501bf16cf631aa'


//############# FORM ################
//########## Get All Form ###########
export async function getAllForm() {
    const url = firstUrl + '/api/v1/forms/all'
    try {
        const data = await sendRequestB('POST', url)
        return data.data
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }

}

//########## Find Form ############
export async function setFindField(id) {
    const url = firstUrl + 'api/v1/forms/find'
    try {
        const data = await sendRequestB('POST', url, { id })
        return data.data
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }
}

//########## Add Form ############
export async function setAddForm(form) {
    const url = firstUrl + '/api/v1/forms/add'
    try {
        const data = await sendRequestB('POST', url, form)
        return data.data
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }
}

//########## Delete Form ############
export async function setDeleteForm(id) {
    const url = firstUrl + '/api/v1/forms/remove'
    try {
        const data = await sendRequestB('DELETE', url, { id })
        return data.data
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }
}

//########## Update Form ############
export async function setUpdateForm(form) {
    const url = firstUrl + '/api/v1/forms/update'
    try {
        const data = await sendRequestB('PATCH', url, form)
        return data.data
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }
}

//############# FIELD ################
//########## Get All Field ###########
export async function getAllField() {
    const url = firstUrl + '/api/v1/fields/all'
    try {
        const data = await sendRequestB('POST', url)
        return data.data
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }
}

//########## Find Field ############
export async function FindField(id) {
    const url = firstUrl + '/api/v1/fields/find'
    try {
        const data = await sendRequestB('POST', url, { id })
        return data.data
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }
}

//########## Add Field ############
export async function setAddField(field) {
    const url = firstUrl + '/api/v1/fields/add'
    try {
        const data = await sendRequestB('POST', url, field)
        return data.data
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }
}

//########## Delete Field ############
export async function setDeleteField(id) {
    const url = firstUrl + '/api/v1/fields/remove'
    try {
        const data = await sendRequestB('DELETE', url, { id })
        return data.message
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }
}

//########## Update Field ############
export async function setUpdateField(field) {
    const url = firstUrl + '/api/v1/fields/update'
    try {
        const data = await sendRequestB('PATCH', url, field)
        return data.data
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }
}

//########## Get All Field Form ###########
export async function getFieldForm(id) {
    const url = firstUrl + '/api/v1/forms/find/fields'
    try {
        const data = await sendRequestB('POST', url, { id })
        return data.data
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }
}


//############# RESPONSE ################
//########## Get All Response Form ############
export async function getAllResponse() {
    const url = firstUrl + '/api/v1/response/get'
    try {
        const data = await sendRequestB('POST', url)
        return data.data
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }
}

//########## Add Response ############
export async function setAddResponse(response) {
    const url = firstUrl + '/api/v1/response/add'
    try {
        const data = await sendRequestB('POST', url, response)
        return data.data
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }
}

//########## Delete Response ############
export async function setDeleteResponse(id) {
    const url = firstUrl + '/api/v1/response/remove'
    try {
        const data = await sendRequestB('POST', url, { id })
        return data.data
    } catch (err) {
        alert("Что то пошло не так, повторити попытку")
        console.log(err)
    }
}

export async function sendRequestB(method, url, body = undefined) {
    const headers = {
        'YT-AUTH-TOKEN': token,
        'Content-Type': 'application/json',
    }
    const response = await fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    })
    return await response.json()
}

export default getAllForm