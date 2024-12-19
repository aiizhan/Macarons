import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../store/action";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Неверный формат email")
    .required("Обязательно"), 
  password: Yup.string()
    .min(4, "Пароль должен содержать не менее 8 символов") 
    .required("Обязательно"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
    .required("Обязательно"),
  first_name: Yup.string().required("Обязательно"),
  rememberMe: Yup.boolean(),
});
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm((prev) => !prev);
  };
  const handleSubmit = (values) => {
    dispatch(signup(values));
  };
  return (
    <div className=" flex items-center justify-center w-full min-h-screen bg-no-repeat bg-center bg-cover ">
        <div className="bg-[#F7EBE5] p-4 rounded-lg shadow-lg w-[350px] h-full mx-auto md:w-[500px] lg:max-w-[550px] sm:max-w-full">
          <Link to="/">
            <div className="flex justify-end">
              <button className="text-xl font-bold">×</button>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-center">Регистрация</h1>
          <h2 className="mb-4 font-semibold text-l">Создать аккаунт</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirm_password: "",
              first_name: "",
              rememberMe: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(signup(values))
                .unwrap()
                .then(() => {
                  navigate("/sign-in", { state: { email: values.email } });
                })
                .catch((error) => {
                  console.error("Ошибка регистрации:", error);
                })
                .finally(() => {
                  setSubmitting(false);
                });
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className="mb-4">
                <div className="flex mb-4 space-x-4">
                  <div className="w-full">
                    <label className="block text-gray-700">
                      Имя <span className="text-[#FE0404]">*</span>
                    </label>
                    <Field
                      name="first_name"
                      type="text"
                      placeholder="Имя"
                      className={`${
                        errors.first_name && touched.first_name
                          ? "border-red-500"
                          : "border-gray-300"
                      } w-full h-9 px-4 border-2 rounded-lg bg-gray-100`}
                    />
                    {errors.first_name && touched.first_name && (
                      <div className="mt-1 text-sm text-[#FE0404]">
                        {errors.first_name}
                      </div>
                    )}
                  </div>
                </div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    className={`${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } w-full h-9 px-4 border-2 rounded-lg bg-gray-100`}
                  />
                  {errors.email && touched.email && (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-4 relative display-flex justify-content-center align-items-center">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Пароль"
                    className={`${
                      errors.password && touched.password
                        ? "border-red-500"
                        : "border-gray-300"
                    } w-full h-10 px-4 border-2 rounded-lg bg-gray-100`}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute transform -translate-y-1/2 right-2 top-4 "
                  >
                    {showPassword ? (
                      <VisibilityIcon className="display-flex justify-center align-items-center w-4 h-4" />
                    ) : (
                      <VisibilityOffIcon className="w-4 h-4" />
                    )}
                  </button>
                  {errors.password && touched.password && (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.password}
                    </div>
                  )}
                </div>
                <div className="relative mb-4">
                  <Field
                    name="confirm_password"
                    type={showPasswordConfirm ? "text" : "password"}
                    placeholder="Подтвердите пароль"
                    className={`${
                      errors.confirm_password && touched.confirm_password
                        ? "border-red-500"
                        : "border-gray-300"
                    } w-full h-9 px-4 pr-10 border-2 rounded-lg bg-gray-100`}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordConfirmVisibility}
                    className="absolute right-2 top-[18px] transform -translate-y-1/2 "
                  >
                    {showPasswordConfirm ? (
                      <VisibilityIcon className="w-4 h-4" />
                    ) : (
                      <VisibilityOffIcon className="w-4 h-4" />
                    )}
                  </button>
                  {errors.confirm_password && touched.confirm_password && (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.confirm_password}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full h-10 text-white bg-[#E7426A] rounded-lg hover:bg-opacity-90"
                >
                  Зарегистрироваться
                </button>
                <div className="mt-4 text-center">
                  <p className="text-sm sm:text-base text-[#242424]">
                    Уже есть аккаунт?{" "}
                    <Link to="/sign-in" className="text-[#E7426A]">
                      Авторизация
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
    </div>
  );
};
export default SignUp;