import React, { useState } from 'react'
import AdminLoggedInContainer from '../../containers/AdminLoggedInContainer'
import { makeAuthenticatedGETRequest } from "../../utils/serverHelper";
import { makeAuthenticatedDELETERequest } from '../../utils/serverHelper';

const Users = () => {
    const [users, setUsers] = useState([])

    const getUserData = async () => {
        const response = await makeAuthenticatedGETRequest(
            "/auth/get/allusers"
        );
        setUsers(response.users);
    };
    getUserData();


    const deleteUser = async (id) => {
        const response = await makeAuthenticatedDELETERequest(
            `/auth/delete/user/${id}`
        )
        getUserData()
    }

    return (
        <AdminLoggedInContainer curActiveScreen="users">
            <div className="text-white text-xl pt-8 font-semibold">
                Users
            </div>
            {
                users.map((item) => {
                    return (
                        <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 mt-4 rounded-sm">
                            <div className="flex w-full">
                                <div className="text-white flex justify-center flex-col pl-4 w-5/6">
                                    <div>
                                        {item.firstName} {item.lastName}
                                    </div>
                                    <div>
                                        {item.email}
                                    </div>
                                    <div>
                                        {item.username}
                                    </div>
                                    <div>
                                        {item.role}
                                    </div>
                                </div>
                                <div className="w-1/6 flex items-center justify-center">
                                    <button className='border border-gray-400 text-white rounded-full px-3 py-1.5 font-semibold'
                                    onClick={() => deleteUser(item._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </AdminLoggedInContainer>
    )
}

export default Users
