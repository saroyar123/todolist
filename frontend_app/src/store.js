import {configureStore} from "@reduxjs/toolkit"
import { loadUser, user } from "./Reducer/user";


const store=configureStore({
    reducer:{
       user:user,
       loadUser:loadUser
    },
});

export default store;