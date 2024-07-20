import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Final = () => {

   const Navigate = useNavigate()

   const handleSignOut = async ()=>{
    try{
        await signOut(auth)
        notify()
        Navigate('/')
        console.log("LogOut successful.")
    }catch(error){
        console.log(error.massage)


    }
   }
   const notify = () => {
    toast.success('Log out successful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};



  return (
    <>
    
    <div className="mx-auto max-w-xl rounded-md bg-black p-1 flex flex-col justify-center items-center">
      <div className="flex flex-col rounded-md bg-white">
        <div className="flex flex-1 flex-col justify-between p-8">
          <div className="mb-4 flex space-x-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            ))}
          </div>
          <div className="flex-1 pt-2">
            <blockquote>
              <p className="text-lg text-gray-800 capitalize">
                “Finally, I have created this with the help of React and Firebase! I aimed to clarify the concepts of routing and authentication. You are now logged into my React app, and you can log out as well. Last but not least, your authentication is complete!”
              </p>

            </blockquote>
          </div>

          <div className="mt-8 border-t border-gray-300 pt-4 flex justify-between dark:border-gray-800">
            <div className="flex items-center">
              <img
                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                src="https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/426168277_1400776414131459_5098965543185619982_n.jpg?ccb=11-4&oh=01_Q5AaIGbzPt4decHjmYr9AJ0kRD0iCwBrKR9ZpOEPicJwrqGb&oe=66A8F215&_nc_sid=e6ed6c&_nc_cat=105"
                alt=""
              />
              <div className="ml-3 min-w-0">
                <p className="truncate text-base font-semibold text-gray-800">Rahul Chaudhary</p>
                <p className=" capitalize truncate text-base text-gray-500">Front-end-devloper</p>
                

              </div>
            </div>
            <button className='bg-black p-[1vh] text-white hover:bg-gray-600 transition-all duration-[0.1s] ease-in rounded-full' onClick={handleSignOut}>Logout</button>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer/>

    </>
    //    <h1>Congrats!!! Your Authentication is Properly working !!</h1>
    //   
   
  )
}

export default Final