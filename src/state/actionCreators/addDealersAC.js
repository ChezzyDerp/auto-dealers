import { ADD_DEALERS } from "../actionTypes"

export default (dealers) =>{
    return {type: ADD_DEALERS, payload:dealers}
}