import { FlashMessage } from "../Components"

const flashErrorMessage = (message = "Something went wrong! Please try again in a few moments") => {
    return FlashMessage({
        type: 'danger',
        message
    })
}

const flashSuccessMessage = (message = "Data succesfully updated") => {
    return FlashMessage({
        type: 'success',
        message
    })
}

const flashInfoMessage = (message = "") => {
    return FlashMessage({
        type: 'info',
        message
    })
}



export { flashErrorMessage, flashSuccessMessage, flashInfoMessage }