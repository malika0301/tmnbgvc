import React from 'react'
import TurnirCard from '../../components/TurnirCard'


const TurnirPage = () => {
  return (
      <div className='container mx-auto p-7'>
    
      <div className='grid grid-cols-3 gap-5'>
        <TurnirCard url={'/img/1.jpg'} title={"Consequat consequat augue quis urna arcu scelerisque ac montes, sed. Arcu orci quam lectus orci in."} desc={"22 июля 2022 года"} />
          <TurnirCard url={'/img/2.png'} title={"Suspendisse orci fermentum congue enim risus velit neque. Mi."} desc={"22 июля 2022 года" } />
          <TurnirCard url={'/img/3.jpg'} title={"Libero fermentum pretium sed orci nunc, sagittis mollis lacus dolor. Tincidunt et enim sed ac faucibus."} desc={ "22 июля 2022 года"} />
          <TurnirCard url={'/img/4.jpg'} title={"Suspendisse orci fermentum congue enim risus velit neque. Mi."} desc={ "22 июля 2022 года"} />
          <TurnirCard url={'/img/5.jpg'} title={"Netus hendrerit tortor laoreet duis proin nulla faucibus ultricies. Et urna fringilla nunc, metus nec. "} desc={"22 июля 2022 года" } />
          <TurnirCard url={'/img/6.jpg'} title={"Libero fermentum pretium sed orci nunc, sagittis mollis lacus dolor. Tincidunt et enim sed ac faucibus."} desc={ "22 июля 2022 года"} />
         </div>
         </div>
  )
}

export default TurnirPage