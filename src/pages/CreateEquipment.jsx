import React,{ useState, useEffect } from 'react'
import { getAllEquipment } from '../services/equipmentService';

export default function CreateEquipment() {

    const [equips, setEquips] = useState([]);
    

    const loadEquipment = async() => {
        try {
            const result = await getAllEquipment(); 
            setEquips(result.data);
            
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect( () => {
        loadEquipment();
    },[])



    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='justify-center items-center content-center max-w-screen-xl'>
                <div className="card p-4 bg-base-100 rounded-md flex flex-wrap flex-row justify-center gap-6">
                    <input type="button" value="All" className="btn btn-md" />
                    <input type="button" value="背包" className="btn btn-md" />
                    <input type="button" value="帳篷" className="btn btn-md" />
                    <input type="button" value="睡袋" className="btn btn-md" />
                    <input type="button" value="+ Add New Equipment" className="btn btn-md" />
                </div>

                <div className="divider"></div>


                <div className='text-center min-h-800px'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>name</th>
                                    <th>description</th>
                                    <th>price</th>
                                    <th>type</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {/* body */}
                            <tbody>
                                {/* row 1 */}
                                {equips.map( (items) => (
                                    <tr className='hover'>
                                        <th>{items.id}</th>
                                        <td>{items.name}</td>
                                        <td>{items.description}</td>
                                        <td>{items.price}</td>
                                        <td>{items.type}</td>
                                        <td>
                                            {/* 編輯按鈕 */}
                                            <input type="button" value="EDIT" className="btn btn-xs btn-outline btn-success md:btn-sm" onClick={()=>document.getElementById(`equip-${items.id}`).showModal()}/>
                                            {/* Modal */}
                                            <dialog id={`equip-${items.id}`} className="modal" >
                                                <div className="modal-box w-7/12 max-w-5xl">
                                                    <form action="">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th></th>
                                                                    <th className='pl-6'>name</th>
                                                                    <th>description</th>
                                                                    <th>price</th>
                                                                    <th className='pl-6'>type</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    {/*  */}
                                                                    <th>
                                                                        <input type="text" placeholder={items.id}className="input input-ghost input-xs max-w-10" disabled/>
                                                                    </th>
                                                                    <th>
                                                                        <input type="text" placeholder={items.name}className="input input-ghost input-xs max-w-24"/>
                                                                    </th>
                                                                    <th>
                                                                        <input type="text" placeholder={items.description}className="input input-ghost input-xs max-w-20"/>
                                                                    </th>
                                                                    <th>
                                                                        <input type="text" placeholder={items.price}className="input input-ghost input-xs max-w-12"/>
                                                                    </th>
                                                                    <th>
                                                                        <select className="select select-xs max-w-24 max-w-xs ">
                                                                        <option disabled selected value="">Select a type</option>
                                                                        <option value="BACKPACK">BACKPACK</option>
                                                                        <option value="TENT">TENT</option>
                                                                        <option value="SLEEPING_BAG">SLEEPING_BAG</option>
                                                                        <option value="ELSE">ELSE</option>
                                                                        </select>
                                                                    </th>
                                                                    <th>
                                                                        <input type="submit" value="SEND" className='btn btn-xs btn-outline btn-success md:btn-xs"' />
                                                                    </th>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </form>
                                                    
                                                </div>
                                                <form method="dialog" className="modal-backdrop">
                                                    <button>close</button>
                                                </form>
                                            </dialog>
                                            {/* 刪除按鈕 */}
                                            <input type="button" value="DELETE" className="btn btn-xs btn-outline btn-error md:btn-sm mx-2" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
