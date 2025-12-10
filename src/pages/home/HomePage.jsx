import React from 'react'
import HomeCard from '../../components/HomeCard'

const HomePage = () => {
  return (
    <section>
      <div className='container mx-auto p-7 grid grid-cols-3 gap-5'>
        <HomeCard url={'/img/9.jpg'} title={"5 летних грунтовых кортов"}/>
        <HomeCard url={'/img/10.jpg'} title={"Зал с покрытием"} />
        <HomeCard url={'/img/11.jpg'} title={"Зал с покрытием “Хард”"} />
      </div>
    </section>
  )
}

export default HomePage