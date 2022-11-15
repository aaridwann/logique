import ColorTheme from '@-utils/colorTheme/colorTheme'
import Image from 'next/image'
import React from 'react'


function HeaderComponents({search,menu}) {
  return (
    <section className={` ${ColorTheme()} bg-purple-500 px-4 bg-gradient-to-r h-[70px] rounded-b-[20px] drop-shadow-xl w-full flex items-center justify-between`} >
      <button onClick={menu}><Image className=' w-auto h-auto' alt='menu' width={20} height={20} src={'/img/png/hamburger.png'} /></button>
      <button><Image className=' w-auto h-auto' alt='logomusic' width={80} height={80} src={'/img/png/musiclogo.png'} /></button>
      <button onClick={search} ><Image  className=' w-auto h-auto' alt='search' width={20} height={20} src={'/img/png/search.png'} /> </button>
    </section>
  )
}

export default HeaderComponents