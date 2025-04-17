import React, { use, useEffect } from 'react'
import hackflixLogo from '../assets/hackflix.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductionHouses } from '../store/actions';
import { useNavigate } from 'react-router-dom';



export default function
() {
        const navigate = useNavigate()
        const dispatch = useDispatch();
        const prodHouses = useSelector((state)=> state.productionHouses.productionHouses);
        const loading = useSelector((state)=> state.productionHouses.loading);
        const error = useSelector((state)=> state.productionHouses.error);

        useEffect(()=>{
            dispatch(fetchProductionHouses())
        },[])

        const handleFilter = (id) => {
            navigate(`/production-house/${id}`)
        }

        const handleHome = () => {
            navigate('/movie')
        }

        const handleLogout = () => {
            navigate('/')
        }
        
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Something Went Wrong...</h1>
    }

    return (
        <div>
            <nav className="py-3 bg-black">
                <div className="flex-1 flex items-center justify-center">
                    <div className="flex-shrink-0 flex items-center">
                        <img src={hackflixLogo} width="120px" />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4 align-middle">
                            <a onClick={handleHome} className="text-white opacity-80 text-lg hover:opacity-100 px-3 py-2 cursor-pointer">Home</a>
                            {
                                prodHouses.map((prodHouse)=> {
                                    return <a key={prodHouse.id} className="text-white opacity-80 text-lg hover:opacity-100 px-3 py-2 cursor-pointer" onClick={() => handleFilter(prodHouse.id)} >{prodHouse.name}</a>
                                })
                            }
                            <a className="text-white opacity-80 text-lg hover:opacity-100 px-3 py-2 cursor-pointer" onClick={handleLogout}>Logout</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
