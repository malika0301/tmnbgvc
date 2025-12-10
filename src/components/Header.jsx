import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='fixed top-0 w-full py-5 bg-gray-400'>
            <div className='container mx-auto p-6 flex items-center justify-between'>
                <NavLink className='text-[24px] text-blue-500 font-bold logo' to="/" ><img src='/public/img/Group.svg' alt="photo" /></NavLink>
                <ul className='flex items-center gap-5'>
                    <li>
                        <NavLink className='text-[24px] text-blue-600 font-bold' to="/">Домой</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-[24px] text-blue-600 font-bold' to="/about">О нас</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-[24px] text-blue-600 font-bold' to="/turnir">Турнир</NavLink>
                    </li>
                    


                </ul>
            </div>
        </header>
    )
}

export default Header