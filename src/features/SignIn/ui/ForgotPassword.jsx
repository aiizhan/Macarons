import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { requestPasswordReset } from '../store/action'; 

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status } = useSelector((state) => state.auth);

    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Неверный формат email')
            .required('Обязательно для заполнения'),
    }); 

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            await dispatch(requestPasswordReset({ email: values.email }));
            navigate('/reset-password');
        } catch (err) {
            console.error('Ошибка при сбросе пароля или входе в систему:', err);
        }
        setSubmitting(false);
    };


    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-cover bg-center p-4">
            <div>
                <div className="bg-[#F7EBE5] p-6 sm:p-8 rounded-lg shadow-lg w-full flex flex-col gap-4 justify-center max-w-[400px] sm:max-w-[500px] mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center">Забыли пароль</h2>
                    <p className="text-start text-sm sm:text-[15px]">
                        Введите свой адрес электронной почты для процесса проверки, мы вышлем код на ваш адрес электронной почты.
                    </p>
                    {/* {error && <div className="text-red-500 text-sm">{error}</div>} */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-4 sm:space-y-6">
                                <div>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="E-mail"
                                        className="input w-full h-10 px-4 border-2 rounded-lg bg-gray-100"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="text-start">
                                    <Link to="/sign-in" className="text-[#E7426A] underline">Вернуться к входу</Link>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || status === 'loading'}
                                        className="w-full py-2 sm:py-3 bg-[#E7426A] text-white rounded-lg"
                                    >
                                        {isSubmitting || status === 'loading' ? 'Отправка...' : 'Отправить'}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;