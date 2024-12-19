import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="  w-[1100px] ">
      <div className="bg-white shadow-lg rounded-lg p-8 ">
        <div className="flex items-center space-x-4 mb-6">
         <Link to={'/'}>
         <img
            src="https://s3-alpha-sig.figma.com/img/2e3c/cf43/75512b6e414168840fe8eac070f5c423?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SfNPOUqI6nWBBqp-O4dVG519z6OLsi3HYWw-HkPW57pKJdgJAgg3m6Ywlh0Lqahp~R7uMTKPNVOb9no9ZSgKKqjuMDvuWBa0lHefS4JqXjzB8tUBL6I1-2F7rz-tLvicBe6BTr4DpvAKm8OblYZXULVNNmdBRySs0JsCRVJ-~3HuTcRHlwQSI2dddmNp3uqO4nr6gaC-3~lv537uKAKsfnCcaP85LyUgRQkIUpBsgbtLW3Wnco-y8TXQUPVi~z3JuZdhVUJIbl64ORGPrv6CgQSOCK1KGUkHdtBYLeARGqQt4oVG00FcodCd~h8IpIoxLv1XNpfLXU~R3WnzJz2SBw__"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
         </Link>
          <div>
            <h2 className="text-lg font-semibold">Бекенова Сабина</h2>
            <p className="text-gray-500">Бишкек, Кыргызстан</p>
          </div>
        </div>
      <div className='ml-60'>
      <h3 className="text-xl font-semibold mb-4">Персональная информация</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: 'Email обязателен' })}
              className="w-[550px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="********"
              {...register('password', { required: 'Пароль обязателен' })}
              className="px-4 w-[550px] py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Подтвердите пароль"
              {...register('confirmPassword', { required: 'Подтверждение пароля обязательно' })}
              className="w-[550px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>
          <div className="flex space-x-4">
            <div className="">
              <input
                type="text"
                placeholder="Имя"
                {...register('firstName', { required: 'Имя обязательно' })}
                defaultValue="Сабина"
                className="w-[266px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Фамилия"
                {...register('lastName', { required: 'Фамилия обязательна' })}
                defaultValue="Бекенова"
                className="w-[266px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
          </div>
          <button type="submit" className="w-[550px] bg-[#E7426A] text-white py-2 rounded-md ">
            Сохранить изменения
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Profile;
