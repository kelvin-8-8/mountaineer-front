import React, {useState} from 'react'
import { addOrder } from '../services/equipmentService';

export default function CartButton({ cart, removeFromCart }) {

    const [selectedDate, setSelectedDate] = useState('');
    const [rentalDays, setRentalDays] = useState('');

    const handleCheckout = async () => {
        try {
            const orderRequest = {
                startDate: selectedDate,
                duration: parseInt(rentalDays, 10),
                items: cart.map(item => ({
                    id: item.id,
                    quantity: item.quantity
                }))
            };

            console.log(orderRequest)
            const result = await addOrder(orderRequest);
            console.log('訂單成功送出:', result);
            alert('訂單已成功送出！');
        } catch (error) {
            console.error('送出訂單失敗:', error);
            alert('送出訂單失敗，請重試。');
        }
    };


    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A3,3,0,0,0,21,6ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A1,1,0,0,1,3,8H6v2a1,1,0,0,0,2,0V8h8v2a1,1,0,0,0,2,0V8h3a1,1,0,0,1,1,1Z" />
                    </svg>
                </label>
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content text-xl min-h-full w-80 pl-6 p-4 ">
                    {/* Sidebar content here */}
                    {cart.length > 0 ? (
                        <>
                            {/* 按鈕 */}
                            <li className='flex flex-row justify-between'>
                                <label className="mb-2">
                                    選擇日期：
                                    <input
                                        type="text"
                                        className="input input-ghost input-success input-sm max-w-24"
                                        onFocus={(e) => {
                                            e.target.type = "date";
                                            e.target.showPicker();
                                        }}
                                        onBlur={(e) => {
                                            if (!e.target.value) {
                                                e.target.type = "text";
                                            }
                                        }}
                                        value={selectedDate}
                                        placeholder="請選擇日期"
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                    />
                                </label>
                                <label className="mb-2">
                                    租借天數：
                                    <input
                                        type="number"
                                        className="input input-ghost input-success input-sm max-w-24"
                                        value={rentalDays}
                                        placeholder="輸入天數"
                                        onChange={(e) => setRentalDays(e.target.value)}
                                        min="1"
                                    />
                                </label >
                                <button 
                                    className="btn btn-outline btn-success mb-4 pr-4" onClick={handleCheckout}>
                                    送出訂單
                                </button>
                                {/* modal內容 */}
                                <dialog id="date_pick_modal" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click outside to close</p>
                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                                {/* modal內容 */}
                            </li>
                            {cart.map((item, index) => (
                                <li key={index} className='flex flex-row justify-between'>
                                    <span onClick={() => removeFromCart(item.name)}>{item.name}</span>
                                    <span>x {item.quantity}</span>
                                </li>
                            ))}
                        </>
                    ) : (
                        <li>購物車是空的</li>
                    )}
                </ul>
            </div>
        </div>

        
    )
}
