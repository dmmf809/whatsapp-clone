import './style.css';

const ChatMessage = ({ name, message, timeStamp }) => {
  return (
    <div className='chat__message chat__receiver'>
      <p>
        <span className='chat__name'>John</span>
        message
        <span className='chat__timeStamp'>{new Date().toLocaleString()}</span>
      </p>
    </div>
  );
};

export default ChatMessage;
