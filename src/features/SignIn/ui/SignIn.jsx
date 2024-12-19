

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/action";
import { Formik, Form, Field, ErrorMessage } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Неверный формат email")
      .required("Обязательно"),
    password: Yup.string().required("Обязательно"),
  });

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-4 bg-center bg-cover">
      <div className="bg-[#F7EBE5] p-5 rounded-lg shadow-lg w-full max-w-[550px] h-auto sm:h-[500px] mx-auto">
        <Link to="/">
          <div className="flex justify-end">
            <button className="text-2xl font-bold">&times;</button>
          </div>
        </Link>
        <h1 className="text-3xl text-center sm:text-4xl">Вход</h1>
        <h2 className="mt-4 text-lg font-semibold sm:text-xl text-start">
          Добро пожаловать!
        </h2>
        <p className="mb-6 text-gray-500 text-start">Войдите в свой аккаунт!</p>
        
        {loginError && (
          <div className="text-red-500 text-center mb-4">
            {loginError}
          </div>
        )}

        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              if (values.remember) {
                localStorage.setItem("email", values.email);
              } else {
                localStorage.removeItem("email");
              }
              const result = await dispatch(login(values)).unwrap();
              console.log("Вход успешен:", result);
              if (result.token) {
                localStorage.setItem("token", result.token);
              }
              navigate("/");
            } catch (error) {
              console.error("Ошибка входа:", error);
              setLoginError("Пароль или логин неверны"); 
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-4">
              <div className="mb-4">
                <Field
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  className="w-full h-10 px-4 bg-gray-100 border-2 rounded-lg input"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>
              <div className="mb-4 relative">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  className={`${errors.password && touched.password ? "border-red-500" : "border-gray-300"} w-full h-10 px-4 border-2 rounded-lg bg-gray-100`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-[18px] transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <VisibilityIcon className="display-flex justify-center align-items-center w-4 h-4" />
                  ) : (
                    <VisibilityOffIcon className="w-4 h-4" />
                  )}
                </button>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>
              <div className="flex flex-row items-center justify-between mb-4 sm:flex-row">
                <div className="flex items-center">
                  <Field name="remember" type="checkbox" className="mr-2" />
                  <label>Запомнить</label>
                </div>
                <Link to="/forgot-password" className="mt-2 text-[#E7426A] sm:mt-0">
                  Забыли пароль?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full h-10 text-lg bg-[#E7426A] cursor-pointer text-white rounded-lg"
                disabled={isSubmitting}
              >
                Войти
              </button>
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-center text-gray-500">
          Если вы не зарегистрированы, нажмите{" "}
          <Link to="/sign-up" className="text-[#E7426A]">
            Регистрация
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;