import React from 'react'

export default function Order() {

    

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='justify-center items-center content-center max-w-screen-xl'>
                <div className="card p-4 bg-base-100 rounded-md flex flex-wrap flex-row justify-center gap-6">
                    <input type="button" value="All" className="btn btn-xs md:btn-md" />
                    <input type="button" value="背包" className="btn btn-xs md:btn-md" />
                    <input type="button" value="帳篷" className="btn btn-xs md:btn-md" />
                    <input type="button" value="睡袋" className="btn btn-xs md:btn-md" />
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
                                <tr className="hover">
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                    <td>
                                        <input type="button" value="EDIT" className="btn btn-xs md:btn-sm" />
                                    </td>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                    <td>Blue</td>
                                </tr>
                                {/* row 3 */}
                                <tr className="hover">
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                    <td>Blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
