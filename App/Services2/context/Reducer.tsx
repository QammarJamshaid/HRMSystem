const Reducer = (state: any, action: any) => {
    switch(action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload.user,
            }
        default:
            return state
    }
}

export default Reducer