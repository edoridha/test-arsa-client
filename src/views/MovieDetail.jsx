import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchFilmById } from '../store/actions'

export default function MovieDetail() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const film = useSelector((state)=> state.films.film)
  const [loading, setLoading] = useState(true)
  const error = useSelector((state)=> state.films.error)

  useEffect(()=> {
    dispatch(fetchFilmById(id))
    setLoading(false)
  },[id, dispatch])

  if (loading) {
    return <h1>Loading...</h1>
}

if (error) {
    return <h1>Something Went Wrong...</h1>
}
  return (
    <div className='flex justify-center items-center mt-10 grid lg:grid-cols-5 gap-y-10 gap-x-6 sm:grid-cols-2 gap-x-0 w-full max-w-7xl mx-auto'>
      <img src={film.thumbnail} alt="" />
      <div>
      <h1 className='text-white opacity-80 text-lg text-xl font-bold mb-10'>{film.title} ({film.release_year})</h1>
      <h2 className='text-white opacity-80 text-lg whitespace-nowrap'>Director : {film.director}</h2>
      <h2 className='text-white opacity-80 text-lg whitespace-nowrap'>Production House : {film.production_house.name}</h2>
      <h2 className='text-white font-bold mt-10'>Sinopsis :</h2>
      <p className='text-white opacity-80  '>{film.sinopsis}</p>
      </div>
    </div>
  )
}
