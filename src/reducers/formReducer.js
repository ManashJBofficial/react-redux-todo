import { TODO_ADD,TODO_DELETE,TODO_DELETE_ALL } from  '../constants/constants'


export const formReducer = (state = { list:[] }, action) => {
    switch (action.type) {

        case TODO_ADD:
            const {id,data} =action.payload
            return { 
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }

        case TODO_DELETE:
            const newList = state.list.filter((e)=>(e.id) !== action.id)
            return { 
                ...state,
                list: newList
            }
    
        case TODO_DELETE_ALL:
            return { 
                ...state,
                list: []
                }
        default:
            return state
    }
    
}