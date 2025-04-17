import React from 'react';
import hackflixLogo from '../assets/hackflix.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/movie');
  }
  return (
    <div>
      <div className="background-main h-screen w-full absolute z-0 top-0">
        <div className="h-screen w-full bg-gradient-to-b from-black via-transparent to-black">
          <div className="py-5 container mx-auto">
            <img src={hackflixLogo} width="180px" alt="Hackflix Logo" />
          </div>
        </div>
      </div>
      <div className="relative container h-screen mx-auto z-10">
        <div className="grid grid-cols-12 h-screen place-items-center">
          <div className="col-start-4 col-span-6 sm:col-start-4 sm:col-span-6 place-items-center">
            <h1 className="text-5xl text-white font-bold text-center">Unlimited movies, TV shows, and more.</h1>
            <div className="grid grid-cols-10 mt-12">
              <div className="col-start-2 col-span-8 sm:col-start-2 sm:col-span-8">
                <div className="px-8 py-5 sm:px-20 sm:py-10 bg-black bg-opacity-80">
                  <h2 className="text-white text-2xl mb-7 font-bold">Welcome</h2>
                  <div>
                    <button type="button"
                      onClick={handleButton}
                      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-sm text-white bg-red-600 focus:outline-none focus:ring focus:border-red-900 focus:ring-red-900 text-lg">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
