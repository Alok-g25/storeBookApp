import React from 'react'
import { useAuth } from './context/AuthProvider'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    

    function handleLogout(){
        try {
            setAuthUser({...authUser,users:null})
            toast.success("user Logut successfully")
            setTimeout(() => {
                window.location.reload();
                localStorage.removeItem("users")
            }, 1000);
           
        } catch (error) {
            toast.error("Error : "+ error)
            setTimeout(()=>{
            },1000)
        }
        
    }

  return (
    <>
        <button onClick={handleLogout} className='className="font-semibold text-white border bg-red-600 hover:bg-red-800 px-3 py-2 rounded-lg cursor-pointer duration-300'>Logout</button>
    </>
  )
}

export default Logout