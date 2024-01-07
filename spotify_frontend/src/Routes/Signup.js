import { Icon } from '@iconify/react';
import TextInput from '../Components/shared/TextInput';
import PasswordInput from '../Components/shared/PasswordInput';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCookies } from "react-cookie"
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelper'

const SignupComponent = () => {

    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState("")
    const [cookie, setCookie] = useCookies(["token"])
    const navigate = useNavigate()

    const signUp = async () => {
        if (email !== confirmEmail) {
            alert("Email and confirm email fields must match. Please check again")
            return
        }
        if (email.length === 0 || username.length === 0 || password.length === 0 || firstName.length === 0 || lastName.length === 0) {
            alert("Please enter the fields")
            return
        }
        const data = { email, password, username, firstName, lastName, role }
        const response = await makeUnauthenticatedPOSTRequest("/auth/register", data)
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, { path: "/", expires: date })
            navigate("/login")
        } else {
            alert("Failure")
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center bg-lightblack overflow-auto">
            <div className='logo p-7 w-full flex '>
                <Icon icon="logos:spotify" width="130" className='ml-4' />
            </div>
            <div className='inputRegion w-1/3 py-10 flex items-center justify-center flex-col'>
                <div className='font-bold mb-6 text-4xl text-white'>Sign up to start listening</div>
                <div>
                    <TextInput
                        label="Email address"
                        placeholder="Enter your email"
                        className="my-6"
                        value={email}
                        setValue={setEmail}
                    />
                    <TextInput
                        label="Confirm Email Address"
                        placeholder="Enter your email again"
                        className="mb-6"
                        value={confirmEmail}
                        setValue={setConfirmEmail}
                    />
                    <TextInput
                        label="Username"
                        placeholder="Enter your username"
                        className="mb-6"
                        value={username}
                        setValue={setUsername}
                    />
                    <PasswordInput
                        label="Create Password"
                        placeholder="Enter a strong password here"
                        value={password}
                        setValue={setPassword}
                    />
                    <div className="w-full flex justify-between items-center space-x-8">
                        <TextInput
                            label="First Name"
                            placeholder="Enter Your First Name"
                            className="my-6"
                            value={firstName}
                            setValue={setFirstName}
                        />
                        <TextInput
                            label="Last Name"
                            placeholder="Enter Your Last Name"
                            className="my-6"
                            value={lastName}
                            setValue={setLastName}
                        />
                    </div>
                    <TextInput
                        label="UserType"
                        placeholder="Enter your usertype"
                        value={role}
                        setValue={setRole}
                    />
                    <button className='bg-green-500 text-lg p-3 px-32 rounded-full w-full mt-8 mb-8 flex items-center 
                    justify-center font-semibold'
                        onClick={(e) => {
                            e.preventDefault();
                            signUp();
                        }}
                    >
                        Sign up
                    </button>
                </div>
                <div className='w-11/12 border border-gray-400 mt-3'></div>
                <div className='text-white my-8'>Already have an account? <Link to="/login" className='cursor-pointer font-semibold hover:text-green-500'>Log in here.</Link></div>
            </div>

        </div>
    )
}

export default SignupComponent