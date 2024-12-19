import React from 'react';
import milk from '../../shared/assets/svg/milk.svg';
import macaron from '../../shared/assets/svg/macaron.svg';
import apelsin from '../../shared/assets/svg/apelsin.svg';
import { Container } from '@mui/material';

function Garant() {
    return (
        <div className='bg-[#F7F7F7]'>

        
        <Container>
            <div className='mt-[50px] md:mt-[100px]  p-6 md:p-10'>
                <div className='mb-10'>
                    <p className='text-center text-xl md:text-2xl mb-4 md:mb-10'>Гарантии вкуса и качества</p>
                    <p className='text-center text-sm md:text-base mb-4 md:mb-10'>
                        При изготовлении пирожных мы используем только натуральные <br className='hidden md:block' />
                        ингредиенты, избегая использования конвер
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-10'>
                    <div className='flex flex-col items-center'>
                        <img className='w-[200px] h-[200px] md:w-[270px] md:h-[270px]' src={milk} alt='Молоко' />
                        <p className='text-center mt-4'>100% <br /> миндальная мука</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-[200px] h-[200px] md:w-[270px] md:h-[270px]' src={macaron} alt='Макарон' />
                        <p className='text-center mt-4'>100% <br /> безопасные пищевые красители</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='w-[200px] h-[200px] md:w-[270px] md:h-[270px]' src={apelsin} alt='Апельсин' />
                        <p className='text-center mt-4'>100% <br /> фруктовые пюре и натуральные ингредиенты</p>
                    </div>
                </div>
            </div>
        </Container>
        </div>
    );
}

export default Garant;
