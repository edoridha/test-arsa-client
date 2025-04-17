import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFilm, fetchProductionHouses } from '../store/actions'
import { useNavigate } from 'react-router-dom'

export default function MovieForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const productionHouses = useSelector((state) => state.productionHouses.productionHouses)
    const loading = useSelector((state) => state.productionHouses.loading)
    const error = useSelector((state) => state.productionHouses.error)
    const [form, setForm] = useState({
        title: "",
        thumbnail: "",
        release_year: "",
        production_house_id: null,
        sinopsis: "",
        director: ""
    })

    useEffect(() => {
        dispatch(fetchProductionHouses())
    }, [])

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelect = (e) => {
        setForm({
            ...form,
            production_house_id: Number(e.target.value),
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addFilm(form))
        navigate('/movie')
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Something Went Wrong...</h1>
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto m-10">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" value={form.title} onChange={handleForm} name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Movie Title</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" value={form.thumbnail} onChange={handleForm} name="thumbnail" id="thumbnail" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="URL" required />
                <label htmlFor="thumbnail" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Thumbnail</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" value={form.director} onChange={handleForm} name="director" id="director" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="director" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Director</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" value={form.release_year} onChange={handleForm} name="release_year" id="release_year" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                <label htmlFor="release_year" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Release Year</label>
            </div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                Sinopsis
            </label>
            <textarea id="message" name='sinopsis' value={form.sinopsis} onChange={handleForm} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            <div className='mb-5'>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">Select your country</label>
                <select id="countries" value={form.production_house_id || ""} onChange={handleSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="" disabled selected>
                        Select a production house
                    </option>
                    {
                        productionHouses.map((e, i) => {
                            return <option key={i} value={e.id}>{e.name}</option>
                        })
                    }
                </select>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    )
}
