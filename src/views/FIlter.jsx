import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductionHouseById } from '../store/actions'
import { useParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

export default function FIlter() {
  const productionHouse = useSelector((state) => state.productionHouses.productionHouse)
  const loading = useSelector((state) => state.productionHouses.loading);
  const error = useSelector((state) => state.productionHouses.error);

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchProductionHouseById(id))
  }, [id, dispatch])

  const films = productionHouse?.films || [];
  
  if (loading) {
    return <h1>Loading...</h1>
}

  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-4 lg:max-w-7xl lg:px-2'>
      <h2 className="text-2xl text-white font-bold">{productionHouse?.name} List</h2>
      <div className='mt-10 grid lg:grid-cols-5 gap-y-10 gap-x-6 sm:grid-cols-2 gap-x-0'>
      { films.length > 0 ?
        films.map((e,i)=> {
         return <MovieCard key={i} film={e}/>
        }) : <p>Loading...</p>
      }
      </div>
    </div>
  )
}
