import {createReducer}from "@reduxjs/toolkit"

// for login
export const user=createReducer({},{
    loginRequest:(state)=>{
        state.loading=true
        state.isAuthitication=false
    },

    loginSuccess:(state,action)=>{
        state.loading=false
        state.user=action.playload
        state.isAuthitication=true
    },

    loginFailure:(state,action)=>{
        state.loading=false
        state.error=action.playload
        state.isAuthitication=false
    }
})

// for user data

export const loadUser=createReducer({},{

    loadUserRequest:(state)=>{
        state.loading=true
        state.isAuthitication=false
    },

    loadUserSuccess:(state,action)=>{
        state.loading=false
        state.isAuthitication=true
        state.user=action.playload
    },

    loadUserFailure:(state,action)=>{
        state.loading=false
        state.isAuthitication=false
        state.error=action.playload
    }
})


// for user methods
export const userMethod=createReducer({},{

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
    }




})