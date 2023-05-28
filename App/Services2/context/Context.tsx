import React, { createContext, useContext, useReducer } from 'react'
import Reducer from './Reducer'

const AppContext: any = createContext('');

const initialState = {
    user: ''
}

const AppProvider = ({ children }: any) => {
    const [state, dispatch]: any = useReducer(Reducer, initialState)

    const updateUser = async (user: any) => {
        return dispatch({
            type: 'UPDATE_USER',
            payload: {
                user: user
            }
        })
    }
    return <AppContext.Provider value={{
        ...state, updateUser,
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = (): any => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext, AppContext }