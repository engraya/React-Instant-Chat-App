import React from 'react'

export default function UserMessage( { previousMessage, message}) {
  const isFirstMessageByUser = !previousMessage || previousMessage.sender.username !== message.sender.username

  return (
    <div className='message-row'>
      { isFirstMessageByUser && (
        <div className='message-avatar'
        style={{ backgroundImage : `url(${message?.sender?.avatar})`}}
        ></div>
      )}
      {message?.attachements?.length > 0
        ? (
              <img src={message.attachements[0].file} 
              alt="message-attachements"
              className='message-image'
              style={{ marginLeft : isFirstMessageByUser ? '4px' : '50px'}}
              />
              ) : (
                  <div className='message' style={{ float : 'left', backgroundColor: '#cabcdc', marginLeft : isFirstMessageByUser ? '4px' : '50px'}}>
                    {message.text}
                  </div>
              )
    
      }
    
    </div>
  )
}
