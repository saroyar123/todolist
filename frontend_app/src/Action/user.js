import axios from "axios";

export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

    const { data } = await axios.post("/api/login", { email, password });

    dispatch({
      type: "loginSuccess",
      playload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loginFailure",
      playload: error.response.data.message,
    });
  }
};

// for load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const { data } = await axios.get("/api/getUserData");

    dispatch({
      type: "loadUserSuccess",
      playload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      playload: error.response.data.message,
    });
  }
};


// for register
export const userRegister=(name,email,password)=>async(dispatch)=>{
  try {
    dispatch({
      type:"registerRequest"
    })

    const {data}=await axios.post("/api/register",{name,email,password});

    dispatch({
      type:"registerSuccess",
      playload:data.message
    })
    
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      playload: error.response.data.message,
    });
  }
}

// add task of the login user

export const addTask=(title,description)=>async(dispatch)=>{
  try {
    dispatch({
      type:"addTaskRequest"
    })

    const {data}=await axios.post("/api/addTask",{title,description});

    dispatch({
      type:"addTaskSuccess",
      playload:data.message
    })

  } catch (error) {
    dispatch({
      type: "addTaskFailure",
      playload: error.response.data.message,
    });
  }
}
