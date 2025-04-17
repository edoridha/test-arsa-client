import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MovieCard({film}) {
    const navigate = useNavigate()

    const handleButton = () => {
        navigate(`/movie/${film.id}`)
    }
  return (
    <div className="group w-full">
         <div className="relative">
           <img
             src={film.thumbnail}
             className="w-full h-full object-center object-cover opacity-90 group-hover:opacity-100" />
         </div>
         <div className="flex justify-center items-center h-16">
           <button
           onClick={handleButton}
             className="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500">
             See Detail</button>
         </div>
       </div>
  )
}
