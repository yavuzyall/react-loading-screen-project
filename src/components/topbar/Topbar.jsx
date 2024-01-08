import React from 'react';
import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Skeleton from '../skeleton/Skeleton';

const Topbar = ({ isLoading }) => {
  return (
    <div className='topbar'>
      <div className="top-left">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="" />
        <span className='logo-text'>YouTube</span>
      </div>
      <div className="top-center">
        <div className="top-search">
          <input type="text" placeholder='Search' />
          <div className="top-search-icon-container">
            <SearchIcon className="top-search-icon" />
          </div>
          <div className="top-mic-icon">
            <MicIcon />
          </div>
        </div>
      </div>
      <div className="top-right">
        {isLoading ? (<Skeleton type="top"/>) :
          (
            <>
              <VideoCallIcon className="top-icon" />
              <AppsIcon className="top-icon" />
              <NotificationsIcon className="top-icon" />
              <img className='top-img' src="../../../assets/fotograf_yavuz.jpg" alt="" />
            </>
          )}

      </div>
    </div>
  )
}

export default Topbar