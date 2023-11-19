import React from 'react'

export default function MyMessage({ message }) {
    if(message?.attachements?.length > 0) {
        return (
            <img src={message.attachements[0].file} 
            alt="message-attachements"
            className='message-image'
            style={{ float : 'right'}}
             />
        )
    }
  return (
    <div className='message' style={{ float : 'right', marginRight : '19px' , color : 'azure', backgroundColor: '#3b2a50'}}>
        {message.text}
    </div>
  )
}
