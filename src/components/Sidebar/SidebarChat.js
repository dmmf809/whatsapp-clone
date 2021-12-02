import { Avatar } from '@mui/material';
import React from 'react';

const SidebarChat = () => {
  return (
    <div className='sidebarChat'>
      <Avatar />
      <div className='sidebarChat__info'>
        <h2>Room Name</h2>
        <p>Message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
