import { createReducer } from "@reduxjs/toolkit";

export const user = createReducer(
  {},
  {
      authRequest: (state) => {
        state.loading = true;
        state.isAuthentication = false;
      },
  
      authSuccess: (state, action) => {
        state.loading = false;
        state.isAuthentication = true;
      },
  
      authFailure: (state, action) => {
        state.loading = false;
        state.isAuthentication = false;
      },

    
  }
);

// for extract all data of user
export const loadUser = createReducer(
  {},
  {
    loadUserRequest: (state) => {
      state.loading = true;
    },

    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.playload;
    },

    loadUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.playload;
    },
  }
);

// for user methods
export const userMethod = createReducer(
  {},
  {


    // for login user
    loginRequest: (state) => {
        state.loading = true;
  
      },
  
      loginSuccess: (state, action) => {
        state.loading = false;
        state.user = action.playload;
    
      },
  
      loginFailure: (state, action) => {
        state.loading = false;
        state.error = action.playload;
       
      },


    // for register new user
    registerRequest: (state) => {
      state.loading = true;
    },

    registerSuccess: (state, action) => {
      state.loading = false;
      state.message = action.playload;
    },

    registerFailure: (state, action) => {
      state.loading = false;
      state.message = action.playload;
    },

    // add task
    addTaskRequest: (state) => {
      state.loading = true;
    },

    addTaskSuccess: (state, action) => {
      state.loading = false;
      state.message = action.playload;
    },

    addTaskFailure: (state, action) => {
      state.loading = false;
      state.message = action.playload;
    },

    // logout user

    logOutRequest: (state) => {
      state.loading = true;
    },

    logOutSuccess: (state, action) => {
      state.loading = false;
      state.message = action.playload;
    },

    logOutFailure: (state, action) => {
      state.loading = false;
      state.message = action.playload;
    },

    // delete task

    deleteTaskRequest: (state) => {
      state.loading = true;
    },

    deleteTaskSuccess: (state, action) => {
      state.loading = false;
      state.message = action.playload;
    },

    deleteTaskFailure: (state, action) => {
      state.loading = false;
      state.message = action.playload;
    },

    deleteUserRequest: (state) => {
      state.loading = true;
    },

    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.playload;
    },

    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.message = action.playload;
    },
  }
);
