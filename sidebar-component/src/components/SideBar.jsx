import React, {useContext} from 'react'
import myContext from '../context/myContext'

export default function SideBar() {
  const { renderBackground, setRenderBackground } = useContext(myContext);

  const renderSidebar = () => {
    setRenderBackground(prev => !prev)
  }
  
  return (
    <div className={`z-20 h-full lg:w-[300px] bg-neutral-200 fixed ${ renderBackground ? 'left-0' : '-left-[300px]' } duration-300`}>
        <div className='w-full h-full flex flex-col justify-start relative'>
          <div className='mt-10 border-b-2 border-black/80'>
            <h1 onClick={renderSidebar} className='absolute right-3 top-3 font-bold text-3xl'>X</h1>
            <h1 className='text-3xl font-bold ml-3 mb-6 text-black/80'>Title</h1>
          </div>
          <div className='w-full h-full flex flex-col mt-3 ml-3'>
            <h1 className='text-2xl font-bold text-black/80 mb-1'>text-1</h1>
            <h1 className='text-2xl font-bold text-black/80 mb-1'>text-2</h1>
            <h1 className='text-2xl font-bold text-black/80 mb-1'>text-3</h1>
            <h1 className='text-2xl font-bold text-black/80 mb-1'>text-4</h1>
            <h1 className='text-2xl font-bold text-black/80 mb-1'>text-5</h1>
            <h1 className='text-2xl font-bold text-black/80 mb-1'>text-6</h1>
            <h1 className='text-2xl font-bold text-black/80 mb-1'>text-7</h1>
          </div>
        </div>
    </div>
  )
}
