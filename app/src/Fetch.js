const firstUrl = 'http://c076-37-21-158-61.ngrok.io'

export async function getAllForm(){
    const url = firstUrl+'/api/v1/forms/all'
    try {
        const data = await sendRequestB('GET',url)
        return data.data
    } catch(err) { 
        console.log(err)
    }
    
}

export async function setAddForm(body){
    const url = firstUrl+'/api/v1/forms/add'
    try {
        const data = await sendRequestB('POST',url,body)
        alert(data.message)
    } catch(err) { 
        console.log(err)
    }
}

export async function setUpdateForm(body){
    const url = firstUrl+'/api/v1/forms/update'
    try {
        const data = await sendRequestB('PATCH',url,body)
        alert(data.message)
    } catch(err) { 
        console.log(err)
    }
}

export async function setDeleteForm(body){
    const url = firstUrl+'/api/v1/forms/remove'
    try {
        const data = await sendRequestB('DELETE',url,body)
        alert(data.message)
    } catch(err) { 
        console.log(err)
    }
}


export async function setAllField(){
    const url = firstUrl+'/api/v1/fields/all'
    try {
        const data = await sendRequestB('GET',url)
        return data.data
    } catch(err) { 
        console.log(err)
    }
}

export async function setAddField(field){
    const url = firstUrl+'/api/v1/fields/add'
    try {
        const data = await sendRequestB('POST',url,field)
        return data.data
    } catch(err) { 
        console.log(err)
    }
}

export async function setUpdateField(field){

}
export async function setDeleteField(id){

}


export async function setAllResponse(){

}
export async function setAddResponse(response){

}


export async function sendRequestB(method, url, body=undefined) {
    const headers = {
        'YT-AUTH-TOKEN': 'YourTar ee144968a86f120aa44fc9675911a3f7e658da90c15e37945e46ec82b15c66f0f3d657a0c7bd783122d44127334d6b705ce186325efc2f6f0d501bf16cf631aa',
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