import React from 'react'

const Home = () => {

    const turn0 = True;
    const winnerPattenr = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ]

    
  return (
    <div className='bg-slate-400 w-full flex justify-center items-center h-[90vh] mt-16'>
          <div className="bg-slate-200 p-10 w-[30%] flex flex-col  items-center  rounded-lg shadow-md">
              <div className="flex">
                  <button className="shadow text-4xl font-semibold text-slate-200 bg-pink-400 mx-4 my-6 p-2 h-14 w-20 cursor-pointer rounded-md">1</button>
                  <button className="shadow text-4xl font-semibold text-slate-200 bg-pink-400 mx-4 my-6 p-2 h-14 w-20 cursor-pointer rounded-md">2</button>
                  <button className="shadow text-4xl font-semibold text-slate-200 bg-pink-400 mx-4 my-6 p-2 h-14 w-20 cursor-pointer rounded-md">3</button> 
              </div>
              <div>
                  <button className="shadow text-4xl font-semibold text-slate-200 bg-pink-400 mx-4 my-6 p-2 h-14 w-20 cursor-pointer rounded-md">1</button>
                  <button className="shadow text-4xl font-semibold text-slate-200 bg-pink-400 mx-4 my-6 p-2 h-14 w-20 cursor-pointer rounded-md">2</button>
                  <button className="shadow text-4xl font-semibold text-slate-200 bg-pink-400 mx-4 my-6 p-2 h-14 w-20 cursor-pointer rounded-md">3</button>
              </div>
              <div>
                  <button className="shadow text-4xl font-semibold text-slate-200 bg-pink-400 mx-4 my-6 p-2 h-14 w-20 cursor-pointer rounded-md">1</button>
                  <button className="shadow text-4xl font-semibold text-slate-200 bg-pink-400 mx-4 my-6 p-2 h-14 w-20 cursor-pointer rounded-md">2</button>
                  <button className="shadow text-4xl font-semibold text-slate-200 bg-pink-400 mx-4 my-6 p-2 h-14 w-20 cursor-pointer rounded-md">3</button>
              </div>
        </div>
    </div>
  )
}

export default Home
