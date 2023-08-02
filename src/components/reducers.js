const initialState ={
data:[],
}


const dataReducer = (state=initialState,action) =>{

    switch (action.type) {
        case 'SET_DATA':
            return{ 
                ...state,
                
                data:[...state.data, action.payload]}
    
        default:
            return state;
    }
}

export default dataReducer