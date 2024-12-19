  import { Formik, Form, Field } from "formik";
  import * as Yup from "yup";
  import { useNavigate } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { resetPasswordVerify  } from "../store/action";
  import { useEffect, useState } from "react";
  import { Alert } from "@mui/material";

  const ResetPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [code, setCode] = useState([""]);
    const [timer, setTimer] = useState(30);
    const [isTimerActive, setIsTimerActive] = useState(true);
    const email = useSelector((state) => state.auth.email);

    const validationSchema = Yup.object({
      code: Yup.string()
        .length(4, "Код должен состоять из 4 цифр")
        .required("Обязательное поле"),
    });

    const handleChange = (e, index, setFieldValue) => {
      const { value } = e.target;
      if (/^\d*$/.test(value) && value.length <= 1) {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        setFieldValue("code", newCode.join(""));

        if (value && index < 3) {
          document.getElementById(`code-input-${index + 1}`).focus();
        }
      }
    };

    const handleSubmit = (values) => {
      const { code } = values;
      dispatch(resetPasswordVerify({ reset_code: code }))
          .unwrap()
          .then((response) => {
              console.log("Код успешно отправлен:", response);
              navigate("/set-new-password");
          })
          .catch((error) => {
              console.error("Ошибка проверки сброса пароля:", error);
          });
    };  
  
    const handleResendSMS = (email) => {
      if (!email) {
        console.error("Email не указан для повторной отправки");
        return;
      }
      dispatch(resetPasswordVerify({ email }))
        .unwrap()
        .then(() => {
          console.log("Код активации отправлен снова", email);
          setTimer(30);
          setIsTimerActive(true);
          Alert("Код активации отправлен снова");
        })
        .catch((error) => {
          console.error("Ошибка при повторной отправке кода:", error);
          Alert("Ошибка при повторной отправке кода: " + error.message);
        });
    };

    useEffect(() => {
      let interval = null;
      if (isTimerActive && timer > 0) {
        interval = setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 1000);
      } else if (timer === 0) {
        setIsTimerActive(false);
      }
      return () => clearInterval(interval);
    }, [isTimerActive, timer]);

    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-center bg-cover">
        <Formik
          initialValues={{ code: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form className="bg-white p-4 md:p-8 rounded-lg shadow-md w-[90%] max-w-[600px] h-auto md:h-[500px] flex flex-col items-center gap-3 justify-center">
              <h1 className="font-semibold mb-4 text-[24px] md:text-[32px] text-center">
                Введите 4-значный код
              </h1>
              <p className="text-gray-700 mb-6 text-[16px] md:text-[20px] w-[80%] md:w-[400px] text-center md:text-start">
                На адрес электронной почты, который вы указали, должен был прийти
                четырехзначный код.
              </p>
              <div className="mb-6 flex gap-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Field
                    key={index}
                    type="text"
                    name={`code-input-${index}`}
                    id={`code-input-${index}`}
                    maxLength={1}
                    onChange={(e) => handleChange(e, index, setFieldValue)}
                    value={code[index]}
                    className={` w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-gray-200 rounded text-center text-lg ${
                      errors.code && touched.code ? "border-red-500" : ""
                    }`}
                  />
                ))}
              </div>
              {errors.code && touched.code && (
                <div className="text-[#E7426A] text-sm">{errors.code}</div>
              )}

              <div className="flex justify-start">
                <div className="flex justify-between items-center gap-[190px] text-blue-500">
                  <button
                    type="button"
                    onClick={() => handleResendSMS(email)}
                    disabled={isTimerActive}
                    className={`py-2 px-4 rounded `}
                  >
                    Отправить SMS ещё раз
                  </button>
                  {isTimerActive && (
                    <span>{`00:${timer < 10 ? `0${timer}` : timer}`}</span>
                  )}
                </div>
              </div>

              <div className="flex justify-center w-full gap-2 md:gap-4">
                <button
                  type="button"
                  className="py-2 bg-[#E7426A] text-white rounded hover:bg-red-400 w-[120px] md:w-[200px] h-[40px] md:h-[50px]"
                  onClick={() => navigate("/forgot-password")}
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="bg-[#E7426A] text-white rounded hover:bg-red-400 w-[120px] md:w-[200px] h-[40px] md:h-[50px]"
                >
                  Отправить
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  };

  export default ResetPassword;
