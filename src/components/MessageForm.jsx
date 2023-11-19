import React from 'react'
import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';


export default function MessageForm(props) {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;


    const handleSubmitHandler = (event) => {
        event.preventDefault();

        const text = value.trim();

        if(text.length > 0 ) sendMessage(creds, chatId, { text })

        setValue('')

    }

    const handleFormChangeHandler = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId)
    }

    const handleUploadHandler = (event) => {
        sendMessage(creds, chatId, { files : event.target.files, text: ''})
    }
  return (
    <form className='message-form' onSubmit={handleSubmitHandler}>
        <input
            className='message-input'
            placeholder='Send a Message'
            value={value}
            onChange={handleFormChangeHandler}
            onSubmit={handleSubmitHandler}
         />
         <label htmlFor="upload-button">
            <span className='image-button'>
                <PictureOutlined className='picture-icon'/>
            </span>
         </label>
         <input
          type="file"
          multiple={false}
          id='upload-button'
          style={{display : 'none' }}
          onChange={handleUploadHandler}
          />
          <button type='submit' className='send-button'>
                <SendOutlined className='send-icon'/>
          </button>
    </form>
  )
}
