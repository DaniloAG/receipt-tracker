export default function UserReducer(state = {}, action = {}){
    switch(action.type){
        case "USER_SIGNED_IN":
            return action.payload;
        default:
            return state;
    }
}