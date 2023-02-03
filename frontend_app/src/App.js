import "./App.css";
import { User } from "./component/user/User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./component/login/Login";
import Register from "./component/register/Register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userAuth, userLoad } from "./Action/user";

function App() {
  const dispatch = useDispatch();

  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    dispatch(userLoad());
    dispatch(userAuth());
  }, [dispatch]);

  const { isAuthentication } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuth) setAuth(isAuthentication);
  }, [isAuthentication, isAuth]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuth ? <User /> : <Login />} />
        <Route path="/register" element={isAuth ? <User /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
