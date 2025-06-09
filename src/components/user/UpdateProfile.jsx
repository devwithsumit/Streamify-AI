import React, { useState } from 'react'
import { auth } from '../../../firebase.config'
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { extractString } from '../../utils/authUtils';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../../redux/slices/userSlice';

const UpdateProfile = () => {
    const user = auth.currentUser
    const [email, setEmail] = useState(user?.email);
    const [displayName, setDisplayName] = useState(user?.displayName);
    const [phone, setPhone] = useState(user?.phoneNumber);
    const [photoURL, setPhotoURL] = useState("https://i.pravatar.cc/300");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProfile(auth.currentUser, {
                displayName: displayName, photoURL,
            })
            navigate("/home");
            dispatch(updateUserProfile({
                displayName: displayName,
                photoURL,
            }));
            toast.success("Updated User Succussfully")
        } catch (error) {
            console.log(error);
            toast.error("Error updating user:", extractString(error.code));
        }
    }
    return (
        <div className="mt-28 sm:mt-14 sm:px-20 min-h-screen flex items-center justify-center p-4">
            <div className="font-std bg-gradient-to-br dark:from-neutral-800 dark:via-neutral-800 dark:to-neutral-700 p-5 mx-auto sm:p-10 mb-10 w-full sm:w-1/2 rounded-2xl bg-white text-gray-900 dark:bg-neutral-800 dark:text-white/90 font-normal leading-relaxed shadow-xl">
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between mb-5 items-start">
                        <h2 className="mb-5 text-3xl font-bold dark:text-[#f3ececf0]">Update Profile</h2>
                        <div className="text-center w-full sm:w-fit">
                            <div>
                                <div className='bg-gradient-to-br from-violet-600 via-blue-500 to-red-500 hover:to-blue-500 hover:from-red-500 transition-colors duration-300 w-32 p-1 rounded-full aspect-square mb-4 mx-auto'>
                                    <img src={(user?.photoURL) || 'defaultProfile.png'} alt="Profile Picture" className="rounded-full w-full h-full transition-transform duration-300" />
                                </div>
                                <input type="file" name="profile" id="upload_profile" hidden required />

                                <label htmlFor="upload_profile" className="inline-flex items-center">
                                    <svg data-slot="icon" className="w-5 h-5 dark:text-white" fill="none" strokeWidth="1.5"
                                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                        </path>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                        </path>
                                    </svg>
                                </label>
                            </div>
                            <button className="hover:bg-gray-200 dark:hover:bg-neutral-700 dark:text-white px-4 py-2 rounded-lg transition-colors duration-200 ring dark:ring-gray-500 ring-gray-300">
                                Change Profile Picture
                            </button>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                            <input type="text" id="name" placeholder='No Name'
                                value={displayName} onChange={(e) => setDisplayName(e.target.value)}
                                className={`w-full dark:bg-neutral-200 border-neutral-300 px-3 py-2 border ${displayName ? 'text-black/80' : 'text-black/50'} rounded-md outline-none`}
                            />
                        </div>
                        <div>
                            <label htmlFor="profile_url" className="block text-sm font-medium">Profile Picture Url</label>
                            <input type="text" id="profile_url" placeholder='Enter your profile picture url..'
                                value={photoURL} onChange={(e) => setPhotoURL(e.target.value)}
                                className="w-full dark:bg-neutral-200 placeholder:text-gray-600 border-neutral-300 px-3 py-2 border text-black rounded-md outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">Email</label>
                            <input type="email" id="email" readOnly
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                className="w-full dark:bg-neutral-200 border-neutral-300 px-3 py-2 border text-black/50 rounded-md outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                            <input type="text" id="phone" placeholder='+91 876543545' readOnly
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full dark:bg-neutral-200 border-neutral-300 px-3 py-2 border text-black/50 rounded-md outline-none" />
                        </div>
                        {/* SUbmit button */}
                        <div className="flex justify-between sm:justify-end space-x-4">
                            <button type="button" className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 rounded-lg">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile
