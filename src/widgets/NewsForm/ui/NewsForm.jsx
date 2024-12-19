

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { createNews } from '../store/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  


const NewsForm = () => {
    const notify = () => toast.success("Продукт успешно создан!");

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const productData = new FormData();
        
        // Добавляем обычные данные
        productData.append('title', data.title);
        productData.append('short_description', data.short_description);
        productData.append('price', data.price);
        productData.append('discount_price', data.discount_price || 0);
        productData.append('description', data.description || ''); // Если описание не обязательное, то передаем пустую строку, чтобы не передавать false
    
        // Добавляем файл изображения
        if (data.image && data.image[0]) {
            productData.append('image', data.image[0]);
        }
    
        // Добавляем другие данные
        productData.append('available', data.available ? 'true' : 'false');
        productData.append('in_cart', data.in_cart ? 'true' : 'false');
    
        // Диспатчим действие для отправки данных
        dispatch(createNews(productData));
        notify();
    };
    


    return (
        <div className="flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full">
                <h2 className="text-2xl font-semibold mb-6">Создать подарочный набор</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Название*"
                            {...register('name', { required: 'Это поле обязательно', minLength: { value: 1, message: 'Минимум 1 символ' }, maxLength: { value: 100, message: 'Максимум 100 символов' } })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    <div>
            <textarea
                placeholder="Описание*"
                {...register('description', { required: 'Это поле обязательно', minLength: { value: 1, message: 'Минимум 1 символ' } })}
                className="w-full h-32 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Цена*"
                            {...register('price', { required: 'Это поле обязательно', pattern: { value: /^\d+(\.\d{1,2})?$/, message: 'Введите действительную цену' } })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            {...register('available')}
                            className="mr-2"
                        />
                        <label>В наличии</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            {...register('in_cart')}
                            className="mr-2"
                        />
                        <label>В корзине</label>
                    </div>
                    <input
                        type="file"
                        {...register('image')}
                        className="border rounded-md py-2 px-4"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Создать продукт</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default NewsForm;