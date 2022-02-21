import { ADD_DEALERS } from "../actionTypes"

export const addDealersAC = (dealers) =>{
    return {type: ADD_DEALERS, payload:dealers}
}