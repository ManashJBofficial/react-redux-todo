import { TODO_ADD,TODO_DELETE,TODO_DELETE_ALL } from  '../constants/constants'

export const insert = (data) => async(dispatch) => {
    try {
        dispatch({ 
            type: TODO_ADD, 
            payload: {
                id: new Date().getTime().toString(),
                data:data
            }
        })

    } catch (error) {
        console.log(error)
    }
}

export const del = (id) => async(dispatch) => {
    try {
        dispatch({ 
            type: TODO_DELETE,
            id
        })

    } catch (error) {
        console.log(error)
    }
}

export const delAll = () => async(dispatch) => {
    try {
        dispatch({ 
            type: TODO_DELETE_ALL,
        })

    } catch (error) {
        console.log(error)
    }
}