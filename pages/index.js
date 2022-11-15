import ButtonComponent from '@-components/button/ButtonComponent'
import CardComponent from '@-components/card/CardComponent'
import Container from '@-components/container/Container'
import InputComponent from '@-components/input/InputComponent'
import ColorTheme from '@-utils/colorTheme/colorTheme'
import { BASE_URL } from '@-utils/constant/url'
import FethchingData from '@-utils/func/Fetching/Fetching'
import { setError } from '@-utils/redux/slice/errorSlice'
import { fetchSong, searchSong } from '@-utils/redux/slice/songSlice'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const { theme, song } = useSelector(state => state)
  const dispatch = useDispatch()
  const route = useRouter()
  const [searchInput, setSearchInput] = useState('')

  const changeHandler = useCallback((e) => {
    setSearchInput(prev => prev = e.target.value)
  }, [])


  async function submitHandler(e) {
    e.preventDefault()
    dispatch(fetchSong())
    try {
      const res = await (await axios.get(BASE_URL + searchInput + '&limit=' + 5)).data
      dispatch(searchSong({ data: res.results, search: searchInput }))
      route.push('/result')
    } catch (error) {
      dispatch(setError({ message: error.data.message }))
    }
  }

  return (
    <Container title={'Home'}>
      <div className={`w-full min-h-screen bg-gradient-to-b from-[#712bda] to-[#a45deb] ${ColorTheme(theme)} flex gap-2 flex-col items-center justify-end `}>
        <Image alt='logo' src={'/img/png/logo.png'} width={80} priority={true} height={80} />


        <form onSubmit={submitHandler} className='h-[300px] gap-4 w-full mt-20 flex items-center flex-col justify-end pb-20'>
          <InputComponent value={(e) => changeHandler(e)} placeHolder='Artist / Album / Title' style='px-4 font-semibold text-gray-800 ' />
          <ButtonComponent submit={submitHandler} style='px-4 bg-white/50 font-semibold text-white ' title='Search' />
        </form>



      </div>
    </Container>
  )
}
