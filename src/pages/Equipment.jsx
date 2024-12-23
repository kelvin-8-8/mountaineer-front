import React, {useState} from 'react'

export default function Equipment( {addToCart} ) {

    const [items, setItems] = useState([
        { id: 1, title: "背包", price: 50, description: "High-quality backpack" },
        { id: 2, title: "帳篷", price: 100, description: "Durable tent" },
        { id: 3, title: "睡袋", price: 30, description: "Comfortable sleeping bag" },
        { id: 4, title: "爐具", price: 20, description: "Portable stove" },
    ]);

    const [quantities, setQuantities] = useState(null);

    const handleQuantityChange = (id, quantity) => {
        setQuantities((prev) => ({
        ...prev,
        [id]: quantity,
        }));
    };

    const handleAddToCart = (item) => {
        const quantity = quantities[item.id] || 1; // 默認數量為1
        if (quantity > 0) {
        addToCart({ ...item, quantity });
        setQuantities((prev) => ({
            ...prev,
            [item.id]: 1, // 重置數量為1
        }));
        }
    };


    return (

        <div className='flex flex-col items-center justify-center '>
            <div className='justify-center items-center content-center max-w-screen-xl'>
                {/* 篩選 */}
                <div className="card p-4 bg-base-100 rounded-md flex flex-wrap flex-row justify-center gap-6">
                    <input type="button" value="All" className="btn btn-xs md:btn-md" />
                    <input type="button" value="背包" className="btn btn-xs md:btn-md" />
                    <input type="button" value="帳篷" className="btn btn-xs md:btn-md" />
                    <input type="button" value="睡袋" className="btn btn-xs md:btn-md" />
                </div>

                <div className="divider"></div>

                {/* 裝備 */}
                <div className='min-h-800px'>
                    <div className='flex flex-row flex-wrap justify-start gap-6 align-center p-4 mt-4 '>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    className='max-h-52 max-w-52'
                                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                    alt="Album" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">1{/* 從後端取的名稱 */}</h2>
                                <p>{/* 從後端取的名稱 */}/day </p>
                                <p>{/* 從後端取的描述 */}Click the button to order.</p>
                                <div className="card-actions justify-end">
                                    <input type="number" placeholder="amount" className="input input-bordered input-sm max-w-24 mr-6" />
                                    <button className="btn btn-sm btn-primary">add</button>
                                </div>
                            </div>
                        </div>

                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    className='max-h-52 max-w-52'
                                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                    alt="Album" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">2{/* 從後端取的名稱 */}</h2>
                                <p>{/* 從後端取的名稱 */}/day </p>
                                <p>{/* 從後端取的描述 */}Click the button to order.</p>
                                <div className="card-actions justify-end">
                                    <input type="number" placeholder="amount" className="input input-bordered input-sm max-w-24 mr-6" />
                                    <button className="btn btn-sm btn-primary">add</button>
                                </div>
                            </div>
                        </div>

                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    className='max-h-52 max-w-52'
                                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                    alt="Album" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">3{/* 從後端取的名稱 */}</h2>
                                <p>{/* 從後端取的名稱 */}/day </p>
                                <p>{/* 從後端取的描述 */}Click the button to order.</p>
                                <div className="card-actions justify-end">
                                    <input type="number" placeholder="amount" className="input input-bordered input-sm max-w-24 mr-6" />
                                    <button className="btn btn-sm btn-primary">add</button>
                                </div>
                            </div>
                        </div>

                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    className='max-h-52 max-w-52'
                                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                    alt="Album" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">4{/* 從後端取的名稱 */}</h2>
                                <p>{/* 從後端取的名稱 */}/day </p>
                                <p>{/* 從後端取的描述 */}Click the button to order.</p>
                                <div className="card-actions justify-end">
                                    <input type="number" placeholder="amount" className="input input-bordered input-sm max-w-24 mr-6" />
                                    <button className="btn btn-sm btn-primary">add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}