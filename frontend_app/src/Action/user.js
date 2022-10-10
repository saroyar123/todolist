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
