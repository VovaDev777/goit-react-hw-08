import { Route, Routes } from "react-router-dom";
import "../../reset.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../../pages/HomePage/HomePage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import Layout from "../Layout/Layout";
import { refreshUser } from "../../redux/auth/authOps";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../Routes/RestrictedRoute";
import PrivateRoute from "../Routes/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Please wait...</div>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo={"/login"} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              component={<LoginPage />}
              redirectTo={"/contacts"}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegistrationPage />}
              redirectTo={"/contacts"}
            />
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
