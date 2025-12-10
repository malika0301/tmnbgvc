import React from 'react'

const TurnirCard = ({url , title , desc}) => {
  return (
      <div className='border border-1 rounded-[10px] p-[10px] max-w-[400px] '>
        <div >
              <img className='h-[100px] w-full object-cover rounded-[5px]' src={url} alt="photo" />
        </div>
        <div>
            <p className='pt-[10px] text-gray-500'>{desc}</p>
            <h3 className='pt-[10px]'>{title}</h3>
            <button className='text-white mt-[15px] mb-[5px] font-bold bg-purple-500 p-[5px] rounded-sm'>Подробнее</button>
        </div>
    
    </div>
  )
}

export default TurnirCard