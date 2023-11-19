import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import SignInForm from './components/SignInForm';
import './App.css';

function App() {

  if(!localStorage.getItem('username')) return <SignInForm/> 
  return (
    <ChatEngine
          height="100vh"
          projectID="5cc7210f-28d2-40f1-850d-9b439065b92e"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps} />}
    />

  );
}

export default App; 
