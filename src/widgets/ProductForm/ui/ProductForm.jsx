import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createProduct } from '../store/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const ProductForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Функция уведомления
  const notify = () => toast.success("Продукт успешно создан!");

  const onSubmit = (data) => {
    const productData = {
        name: data.name,
        description: data.description,
        price: data.price,
        available: data.available || false,
        in_cart: data.in_cart || false,
        image: data.image[0],
    };

    dispatch(createProduct(productData));

    notify();

    console.log(data);
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
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Создать продукт
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ProductForm;

