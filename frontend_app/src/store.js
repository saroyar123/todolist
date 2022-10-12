import {configureStore} from "@reduxjs/toolkit"
import { loadUser, user, userMethod } from "./Reducer/user";


const store=configureStore({
    reducer:{
       user:user,
       loadUser:loadUser,
       userMethod:userMethod
    },
});

export default store;