const initialState = {
    userListData:[]
  };
    
  export const UserListReducer = (state = initialState, action) => { 
      if(action.type==='USER_LIST'){
        return{
          ...state,
          productListData: action.payload
        }
      }
      return state
  };