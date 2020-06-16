export function validateEmptyField(str, valid, setErrorMessage, errorMessage) {
    if(str.trim() === '') {
        setErrorMessage(errorMessage)
        valid = false
    } else {
        setErrorMessage('')
    }
}