"use client"
import React , {useState , useEffect} from 'react'
import Image from 'next/image'
import img1 from './images/1.jpg'
import { IoIosArrowBack } from "react-icons/io";

const  page = () => {
const [data , setData] = useState()
const [lists , setLists] = useState()
  

  const handleList = (value)=>{
    setData(value)
   
  }


  const FetchApi = async ()=>{
    const Apidata = await fetch(`https://supportive-car-b7a635f0ab.strapiapp.com/api/choose-uses?populate=*`)
    let posts = await Apidata.json()
    setLists(posts)
  }


  useEffect(()=>{
 
    FetchApi()
    
  },[])

  return (
    <main className='w-full h-screen flex-col px-[200px]  flex  items-center bg-white' >
        <div className='flex flex-col items-center w-[800px] mt-[100px] text-center gap-[10px]' >
              <h1 className='text-[20px]' >Why Choose Us</h1>
              <h1 className='text-[26px] font-semibold' >We Are Different From Others</h1>
              <h1 className='text-[18px] font-normal' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h1>
        </div>
        <div className='flex  mt-[30px]  w-full items-center  ' >
              <div className='relative h-[400px] min-h-fit w-[70%]' >
                <div className='w-[400px] absolute top-0 left-[200px] h-[400px] flex flex-col justify-center items-center rounded-full bg-yellow-400' >
           
              <Image width={500} height={500} priority alt='image' src={ !data ? img1 : `${data?.image?.url}`  } className='w-full h-full rounded-full object-cover object-center' />                

                </div>
                <div className='w-[400px] text-white flex flex-col justify-center items-start p-[30px] absolute top-0 left-0 h-[400px] rounded-full bg-[#CB4263]/90' >
                <h1 className='text-[18px] font-semibold' >{data?.title ||  lists?.data[0].title  }</h1>
                <p>
                {data?.para ||  lists?.data[0].para  }
                </p>
                </div>
              </div>
              <div className='w-[30%] flex justify-end '>
                <ul className='flex flex-col gap-[10px]' >
                  {
                    lists?.data?.map((val)=>(
                   <li 
                   key={val.id}
                   onClick={()=>handleList(val)}
                  className='w-[300px] py-[5px] cursor-pointer bg-red-500 text-white rounded-s-full flex items-center font-semibold text-[16px] justify-between px-[10px]'
                  >
                    <IoIosArrowBack/>
                    {val.title}
                  
                  </li>
                    ))
                  }              
                </ul>
              </div>
        </div>
        
    </main>
  )
}

export default page


