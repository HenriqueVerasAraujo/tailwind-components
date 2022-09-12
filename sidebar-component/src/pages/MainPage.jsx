import React, {useContext} from 'react'
import SideBar from '../components/SideBar'
import myContext from '../context/myContext'

export default function MainPage() {
  const {renderBackground, setRenderBackground} = useContext(myContext);

  const renderSidebar = () => {
    setRenderBackground(prev => !prev)
  }

  return (
    <div className='w-screen h-screen bg-white'>
      <h1 onClick={renderSidebar} className=' absolute top-3 left-3 text-3xl font-bold'>Open</h1>
      <SideBar />
      {renderBackground && (
        <div onClick={renderSidebar} className='w-full h-full bg-black/80 fixed z-10 duration-300'></div>
      )}
    </div>
  )
}
