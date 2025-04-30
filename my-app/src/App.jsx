import { useState } from 'react'

import cuervo from './assets/cuervo.jpg'
import imagenlagra from './assets/e86580962df4ff19afefa604cb33d76c.jpg' 
import vanera from './assets/055eeef00d8e6c0ddde48ebd4e43a4ee.jpg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex flex-row ">
  <div class="basis-64 size-32 min-w-[10%]  max-w-[2%] rounded-lg    ">logo</div>

  <div class="relative basis-64 h-[40px] rounded-full min-w-[40%]">
  <div class="pointer-events-auto absolute ...">
    <svg class="absolute h-5 w-5 text-gray-400">
      
    </svg>
  </div>
  <input type="text" placeholder="Search" class="h-[38px] pe-[50%] rounded-full" />
</div>





  
  <div class="basis-64 size-20 rounded-lg ">inconos</div>
  
  <div class="basis-64 size-20 rounded-lg ">inconos</div>
  <div class="basis-64 size-20 rounded-lg ">inconos</div>
  <div class="basis-64 size-20 rounded-lg ">login</div>
</div>







<div class="flex flex-row   ">
  <div class="iamgen"  >
    <img src={cuervo} alt="" />
  </div>
</div>



<div class=" bg-fixed  mt-70  mb-40 z-40 bg-cover bg-center h-[40rem] w-full mx-auto" style={{ backgroundImage: `url(${imagenlagra})` }}>
  
  
</div>

<div class="flex flex-row">
  <div class="basis-3xs w-64 h-32">01</div>
  <div class="basis-3xs w-64">02</div>
  <div class="basis-3xs w-64">03</div>
  <div class="basis-3xs w-64">04</div>
  
</div>


<div class="flex mt-40">
    <div class="vaner">

    <img class="w-[1300px] h-[360px]" src={vanera} alt="" />

    </div>
</div>




    </>
  )
}





export default App
