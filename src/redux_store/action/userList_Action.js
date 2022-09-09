export const USER_LIST = "USER_LIST";

export const UserList_Action= (url) => async (dispatch) => {
    const response = await fetch(url)
    const data = await response.json()
    dispatch({
        type: USER_LIST,
        payload : data
    });
}