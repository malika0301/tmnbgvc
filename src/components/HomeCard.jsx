import React from 'react'

const HomeCard = ({url , title}) => {
  return (
    <div>
          <img className='h-[280px] w-[400px] object-cover' src={url} alt="photo" />
          <h1 className='text-[18px] text-center text-red-600 font-bold mt-[-80px] p-[10px]'>{title}</h1>
    </div>
  )
}

export default HomeCard