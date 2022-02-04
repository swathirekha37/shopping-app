import  SET_CURRENT_USER  from "./userTypes"

const userActions = user =>({
    type : SET_CURRENT_USER,
    payload : user
})

export default userActions