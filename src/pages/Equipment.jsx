import React from 'react'

export default function Equipment() {

    

    return (

        <>
            <div className="card p-4 bg-base-100 rounded-md shadow">
                <label className='form-control w-full max-w-xs'>
                    <div className='label'>
                        <span className='label-text '>裝備種類篩選</span>
                    </div>
                    <select
                        className="select selected-bordered"
                        onChange={(e) => handleFilterChange(e.target.value)}
                    >
                        <option disabled selected>這裡選擇種類</option>
                        <option value="all">全部</option>
                        <option value="armor">帳篷</option>
                        <option value="backpack">背包</option>
                        <option value="sleepingBag">睡袋</option>
                        <option value="trekkingPoles">登山杖</option>
                        <option value="accessories">其他配件</option>
                    </select>
                </label>
            </div>

            <div className='divider'></div>

            <div className='flex flex-row justify-between gap-4 align-center'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
