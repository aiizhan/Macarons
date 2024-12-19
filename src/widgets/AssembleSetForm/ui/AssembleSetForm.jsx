import { useForm } from 'react-hook-form';

const AssembleSetForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center  ">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[1033px]">
        <h2 className="text-2xl font-semibold mb-6">Создать продукт</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Наименование товара*"
                {...register('productName', { required: 'Это поле обязательно' })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.productName && <p className="text-red-500 text-sm">{errors.productName.message}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Краткое описание*"
                {...register('shortDescription', { required: 'Это поле обязательно' })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.shortDescription && <p className="text-red-500 text-sm">{errors.shortDescription.message}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Цена*"
                {...register('price', { required: 'Это поле обязательно' })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Цена скидки*"
                {...register('discountPrice', { required: 'Это поле обязательно' })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.discountPrice && <p className="text-red-500 text-sm">{errors.discountPrice.message}</p>}
            </div>
          </div>
          <div>
            <textarea
              placeholder="Описание продукта*"
              {...register('productDescription', { required: 'Это поле обязательно' })}
              className="w-full h-32 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.productDescription && <p className="text-red-500 text-sm">{errors.productDescription.message}</p>}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <input
                type="file"
                {...register('file', { required: 'Выберите файл' })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}
            </div>
          </div>
      
        </form>
      </div>
    </div>
  );
};

export default AssembleSetForm;
