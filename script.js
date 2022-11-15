const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = [] 
    if(name.value === '' || name.value == null){
        messages.push('Name is required')
    }
    if(password.value.length <= 6){
        messages.push('Password should be longer than 6 characters')
    }
    if(password.value.length >= 16){
        messages.push('Password should be less than 16 characters')
    }
    if(password.value === 'password'){
        messages.push('Password cant be password')
    }
    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', '
        )
    }
})
