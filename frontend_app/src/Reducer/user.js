import {createReducer}from "@reduxjs/toolkit"

export const user=createReducer({},{

})
export const loadUser=createReducer({},{

    // for login
    loginRequest:(state)=>{
        state.loading=true
        state.isAuthentication=false
    },

    loginSuccess:(state,action)=>{
        state.loading=false
        state.user=action.playload
        state.isAuthentication=true
    },

    loginFailure:(state,action)=>{
        state.loading=false
        state.error=action.playload
        state.isAuthentication=false
    },

  
    // for extract all data of user
    loadUserRequest:(state)=>{
        state.loading=true
        state.isAuthentication=false
    },

    loadUserSuccess:(state,action)=>{
        state.loading=false
        state.isAuthentication=true
        state.user=action.playload
    },

    loadUserFailure:(state,action)=>{
        state.loading=false
        state.isAuthentication=false
        state.error=action.playload
    },


    // for register new user
    registerRequest:(state)=>{
        state.loading=true
    },

    registerSuccess:(state,action)=>{
        state.loading=false
        state.message=action.playload
    },

    registerFailure:(state,action)=>{
        state.loading=false
        state.message=action.playload
    },

})


// for user methods
export const userMethod=createReducer({},{

   
    // add task 

    addTaskRequest:(state)=>{
        state.loading=true
    },

    addTaskSuccess:(state,action)=>{
        state.loading=false
        state.message=action.playload
    },

    addTaskFailure:(state,action)=>{
        state.loading=false
        state.message=action.playload
    },


    // logout user

    logOutRequest:(state)=>{
        state.loading=true
    },

    logOutSuccess:(state,action)=>{
        state.loading=false
        state.message=action.playload
    },

    logOutFailure:(state,action)=>{
        state.loading=false
        state.message=action.playload
    },

    // delete task

    deleteTaskRequest:(state)=>{
        state.loading=true
    },

    deleteTaskSuccess:(state,action)=>{
        state.loading=false
        state.message=action.playload
    },

    deleteTaskFailure:(state,action)=>{
        state.loading=false
        state.message=action.playload
    }





})