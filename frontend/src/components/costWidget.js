import React from 'react'
import coin from '../ressources/coin.png'
export default function costWidget() {
  return (
    <div className="flex flex-col items-center bg-slate-200 rounded-xl shadow-xl p-12 mt-8 h-fit">
        {Coin()}
        <h2 className='font-bold text-center text-black pb-2'>Weekly Cost</h2>
        <p className="text-center text-black pb-4">Total cost: 57$</p>
    </div>
  )
}
function Coin() {
  return (
    <img className='w-24' src={coin} alt="coin" />
  )
}