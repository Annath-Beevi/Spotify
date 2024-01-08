import React, { useState, useEffect } from 'react'
import AdminLoggedInContainer from '../../containers/AdminLoggedInContainer'
import { makeAuthenticatedGETRequest } from "../../utils/serverHelper";
// import { makeAuthenticatedDELETERequest } from '../../utils/serverHelper';

const Users = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        const getUserData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/auth/get/allusers"
            );
            setUsers(response.users);
            console.log(response)
        };
        getUserData();
    }, []);

    // const deleteUser = () => {
    //     const response = await makeAuthenticatedDELETERequest(
    //         ""
    //     )
    // }

    return (
        <AdminLoggedInContainer curActiveScreen="users">
            <div className="text-white text-xl pt-8 font-semibold">
                Users
            </div>
            {
                users.map((item) => {
                    return (
                        <Card info={item} />
                    )
                })
            }
        </AdminLoggedInContainer>
    )
}

export default Users

const Card = ({ info }) => {
    return (
        <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 mt-4 rounded-sm">
            <div className="flex w-full">
                <div className="text-white flex justify-center flex-col pl-4 w-5/6">
                    <div>
                        {info.firstName} {info.lastName}
                    </div>
                    <div>
                        {info.email}
                    </div>
                    <div>
                        {info.username}
                    </div>
                    <div>
                        {info.role}
                    </div>
                </div>
                <div className="w-1/6 flex items-center justify-center">
                    <button className='border border-gray-400 text-white rounded-full px-3 py-1.5 font-semibold'>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}