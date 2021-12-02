import './style.css';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  return (
    <div className='sidebar__container'>
      <div className='sidebar__header'>
        <Avatar />
        <div className='sidebar__header-right'>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__search-container'>
          <SearchIcon />
          <input placeholder='Search or start a new chat' />
        </div>
      </div>
      <div className='sidebar__chat'>
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
