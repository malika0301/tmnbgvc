import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='w-full py-5  bg-gray-400 mt-6'>
            <div className='container mx-auto p-6 flex items-center justify-around'>

                <p className='text-[20px] text-gray-500'>2022 © Все права защищены.</p>

                <ul className='flex items-center justify-between gap-5 w-2xl'>
                    <li>
                        <Link className='text-[20px] text-blue-600 font-bold' to="/">Домой</Link>
                    </li>
                    <li>
                        <Link className='text-[20px] text-blue-600 font-bold' to="/about">О нас</Link>
                    </li>
                    <li>
                        <Link className='text-[20px] text-blue-600 font-bold' to="/turnir">Турнир</Link>
                    </li>
                    <li>
                        <p className='text-[20px] text-blue-600 font-bold' to="/">Услуги</p>
                    </li>
                    <li>
                        <p className='text-[20px] text-blue-600 font-bold' to="/">Детский теннис</p>
                    </li>
                    <li>
                        <p className='text-[20px] text-blue-600 font-bold' to="/">Галерея</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer