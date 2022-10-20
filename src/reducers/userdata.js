import {DATA_USER_LOGIN} from '../actions/index';

const DataUserLogin =(state=2, action)=> {
    switch(action.type){
        case DATA_USER_LOGIN:
            return state = action.data
        default: 
            return state
    }
}
export default DataUserLogin;