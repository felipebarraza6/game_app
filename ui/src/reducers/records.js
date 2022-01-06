export const reducer = (state, action) => {
    switch (action.type) {

        case 'ADD_LIST':
            
            return {
                ...state,
                listRecords: action.payload.results
            }

        case 'ADD_SELECTED_RECORD':            
            return {
                ...state,
                editRecord: action.payload               
            }
        
        default:
            return state
    }
}