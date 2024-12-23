import React from 'react'

export default function CartButton( {cart} ) {
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
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {
                        cart.map( (item, index) => (
                            <li key={index}>
                                {item.title} x {item.quantity}
                            </li>
                        ))
                    }
                    <li><a></a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>

        // <div className='drawer drawer-end'>
        //     <input id="my-drawer" type="checkbox" className='drawer-toggle'/>
        //     {/* Page Content */}
        //     <div className='drawer-content'>
        //         <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button">
        //             <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        //                 <path d="M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A3,3,0,0,0,21,6ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A1,1,0,0,1,3,8H6v2a1,1,0,0,0,2,0V8h8v2a1,1,0,0,0,2,0V8h3a1,1,0,0,1,1,1Z"/>
        //             </svg>
        //         </label>
        //     </div>

        //     {/* Sidebar content */}
        //     <div>
        //         <label htmlFor="my-drawer" aria-label='close sidebar' className='drawer-overlay'></label>
        //         <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        //             <li></li>
        //             <li></li>
        //         </ul>
        //     </div>
        // </div>
    )
}
