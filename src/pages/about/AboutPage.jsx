import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <section>
      <div className='container mx-auto p-7'>
        <Link to="/turnir" className='text-[20px] font-bold pb-[15px]'>О наших услугах!</Link>
      <div >
        <h1 className='text-2xl font-bold pb-[30px] pt-[10px]'>Фото кортов</h1>
        <div className=''>
          <img className='object-cover h-[500px] w-full' src='/img/7.jpg' alt="photo" />
        </div>
      </div>
      <div>
          <h1 className='text-2xl font-bold pb-[30px] pt-[20px]'>О клубе</h1>
          <div className=''>
            <img className='object-cover h-[500px] w-full' src='/img/8.jpg' alt="photo" />
          </div>
      </div>
      </div>
    </section>
  )
}

export default AboutPage