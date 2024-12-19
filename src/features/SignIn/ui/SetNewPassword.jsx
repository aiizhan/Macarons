import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setNewPassword } from "../store/action";

const SetNewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { reset_code } = useParams(); 

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(4, "Минимум 4 символов")
      .required("Обязательное поле"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
      .required("Обязательное поле"),
  });

  const handleSubmit = ({ password, confirm_password }) => {
    dispatch(setNewPassword({ reset_code, password, confirm_password }))
    .unwrap()
      .then(() => {
        console.log("Пароль успешно изменен");
        navigate("/sign-in");
      })
      .catch((error) => {
        if (error.code === "token_not_valid") {
          alert("Ваш токен недействителен или истек. Попробуйте снова.");
        } else {
          console.error("Ошибка при установке нового пароля:", error);
        }
      });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Formik
        initialValues={{ password: "", confirm_password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="bg-[#F7EBE5] p-8 rounded-lg shadow-md w-[90%] max-w-[600px]">
            <h2 className="text-2xl font-semibold mb-6 text-center">Установите новый пароль</h2>
            <div className="mb-4">
              <Field
                name="password"
                type="text"
                placeholder="Новый пароль"
                className="w-full px-4 py-2 rounded-lg border"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm">{errors.password}</div>
              )}
            </div>
            <div className="mb-4">
              <Field
                name="confirm_password"
                type="text"
                placeholder="Подтвердите пароль"
                className="w-full px-4 py-2 rounded-lg border"
              />
              {errors.confirm_password && touched.confirm_password && (
                <div className="text-red-500 text-sm">{errors.confirm_password}</div>
              )}
            </div>
            <button type="submit" className="w-full py-2 bg-[#E7426A] text-white rounded-lg hover:bg-rose-700">
              Сохранить пароль
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SetNewPassword;
