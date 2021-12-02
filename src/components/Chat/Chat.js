import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import './style.css';
import ChatMessage from './ChatMessage';
import { useState } from 'react';

const Chat = () => {
  const [input, setInput] = useState('');

  return (
    <div className='chat__container'>
      <div className='chat__header'>
        <Avatar />
        <div className='chat__header-info'>
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className='chat__header-right'>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        <ChatMessage name message timeStamp />
      </div>
      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            placeholder='Send a message...'
          />
          <IconButton>
            <SendIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default Chat;
