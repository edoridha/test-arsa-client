import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilms } from '../store/actions'
import MovieCard from '../components/MovieCard'
import { useNavigate } from 'react-router-dom'

export default function Movie() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const films = useSelector((state) => state.films.films)
  const loading = useSelector((state) => state.films.loading)
  const error = useSelector((state) => state.films.error)

  useEffect(() => {
    dispatch(fetchFilms())
  }, [])

  const handleAddMovie = () => {
    navigate('/add-movie')
  }
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Something Went Wrong...</h1>
  }
  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-4 lg:max-w-7xl lg:px-2'>
      <h2 className="text-2xl text-white font-bold">Movie List</h2>
      <button type="button" onClick={handleAddMovie}
                  className="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500">
                  Add Movie</button>
      <div className='mt-10 grid lg:grid-cols-5 gap-y-10 gap-x-6 sm:grid-cols-2 gap-x-0'>
        {
          films.map((d) => {
            return <MovieCard key={d.id} film={d}/>
          })
        }
      </div>
    </div>
  )
}
