// Search the button
let btnTime = document.querySelector('#add-time')
btnTime.addEventListener('click', cloneField)
// When clicking the button

// Executing the action
function cloneField() {
    // Duplicating fields
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Cleaning inputs
    const fields = newFieldContainer.querySelectorAll('input')

    // Cleaning each field
    /* For Loop version 
    for (let i = 0; i < fields.length; i++) {
        fields[i].value = ""
    } */
    
    // ForEach version
    fields.forEach(field => {
        field.value = ""
    })

    // Inserting into page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}


