import React from 'react'
import MessageForm from '../components/MessageForm';
import MyMessage from '../components/MyMessage';
import OtherUserMessage from '../components/OtherUserMessage';
export default function ChatFeed(props) {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderReadMessagesReciepts = (message, isMyMessage) => {
        chat.people.map((person, index) => person.last_read === message.id && (
            <div 
                key={`read_${index}`}
                className='read-receipt'
                style={{
                    float : isMyMessage ? 'right' : 'left',
                    backgroundImage : `url(${person?.person?.avatar})`
                }}
            />
        ))
    }

    const renderMessages = () => {
        const keys =  Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const previousMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width : '100%'}}>

                    <div className='message-block'>
                        {
                            isMyMessage ? 
                                
                            <MyMessage message={message}/> :

                            <OtherUserMessage message={message} previousMessage={messages[previousMessageKey]}/>
                        }
                    </div>
                    <div className='read-messages-receipts' style={{ marginRight : isMyMessage ? '19px' : '0px', marginLeft : isMyMessage ?  '0px' : '70px'}}></div>
                        {renderReadMessagesReciepts(message, isMyMessage)}
                </div>
            )
        })  

     
    }
    renderMessages();

    if(!chat) return 'Chat Loading......................';
    return (
        <div className='chat-feed'>
            <div className='chat-title-container'>
                <div className='chat-title'>{chat.title}</div>
                <div className='chat-subtitle'>
                    {chat.people.map((person) => `${person.person.username} `)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height : '100px' }}/>
            <div className='message-form-container'>
                <MessageForm {...props}  chatID={activeChat} />
            </div>
        </div>
  )
}
