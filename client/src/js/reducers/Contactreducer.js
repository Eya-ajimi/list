const { GET_CONTACTS } = require("../constants/Contactconst")

const initState={
    contacts:[]
}
const Contactreducer=(state=initState,action)=>{
    switch(action.type){
        case GET_CONTACTS:return{
            ...state,contacts:action.payload.contacts
        }
        default:return state
    }
}
export default Contactreducer;