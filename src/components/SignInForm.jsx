import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function SignInForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')


    const handleSubmitFunc = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID' : "5cc7210f-28d2-40f1-850d-9b439065b92e", 'User-Name' : username, 'User-Secret' : password}
        
        try {
            await axios.get('https://api.chatengine.io/chats', { headers : authObject} )

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload();
        } catch (error) {
            setErrorMessage('Sorry!, Enter Correct Credentials to Get started')
        }




    }


  return (
    <div className='wrapper'>
        <div className='form'>
         <h1 className='title'>Instant Chat Application</h1>
         <h2 className='error'>{errorMessage}</h2>
         <form onSubmit={handleSubmitFunc}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
            <div alin='center'>
                <button type='submit' className='button'>
                    <span>Get Started</span>
                </button>
            </div>

         </form>
        </div>
  

      
    </div>
  )
}
