import React from 'react'

export default function Equipment() {

    // const [items, setItems] = useState([null]);

    // useEffect(() => {

    //     const fetchEquipment= async ()
    // })
    

    return (

        <div className='flex flex-col max-w-screen-xl'>
            <div className="card p-4 bg-base-100 rounded-md shadow flex flex-wrap flex-row justify-center gap-6">
                <input type="button" value="All" className="btn btn-xs md:btn-md" />
                <input type="button" value="背包" className="btn btn-xs md:btn-md" />
            </div>



            <div className='flex flex-row justify-center gap-4 align-center p-4 mt-4'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            className='max-h-52 max-w-52'
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">2{/* 從後端取的名稱 */ }</h2>
                        <p>{/* 從後端取的名稱 */ }/day </p>
                        <p>{/* 從後端取的描述 */ }Click the button to order.</p>
                        <div className="card-actions justify-end">
                            <input type="number" placeholder="amount" className="input input-bordered input-sm max-w-24 mr-6"/>
                            <button className="btn btn-sm btn-primary">Order</button>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>

    )
}

{/* <div className="card card-side bg-base-100 shadow-xl">
    <figure>
        <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album" />
    </figure>
    <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
            <button className="btn btn-sm btn-primary">Listen</button>
        </div>
    </div>
</div> */}

{/* <label className='form-control w-full max-w-xs'>
    <div className='label'>
        <span className='label-text '>裝備種類篩選</span>
    </div>
    <select
        className="select selected-bordered"
        onChange={(e) => handleFilterChange(e.target.value)}
    >
        <option disabled selected>這裡選擇種類</option>
        <option value="all">全部</option>
        <option value="tent">帳篷</option>
        <option value="backpack">背包</option>
        <option value="sleepingBag">睡袋</option>
        <option value="trekkingPoles">登山杖</option>
        <option value="accessories">其他配件</option>
    </select>
</label> */}
