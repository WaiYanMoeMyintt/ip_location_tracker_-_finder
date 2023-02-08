import React from 'react'
import { Link } from 'react-router-dom';
import Track from './Track';
const Navbar = () => {
  return (
     <>
    <div className='ip-header'>
         <div className='ip-title'>
         <h3>IP Address Tracker</h3>
         <p>
           Lookup, Trace, Track, Find an IP 
           Location with IP tracking <br/> technology  
           and IP tracer tool from this website.
         </p>
        </div>

        <ul className='ip-link'>
             <li>
                <Link to = "/ip/tracker">IP Address Tracker</Link>
                <Link to = "/ip/finder">IP Address Finder</Link>
             </li>
        </ul>
    </div>

    <div className='ip-info'>
          <h4>What is IP Address Tracking ?</h4>
          <p>
          IP tracking is the technology behind our project that allows you to <br/> 
          easily search, find, track and trace the location not only of your<br/> 
           public IP, but also the location of any other publicly accessible <br/> 
           IP or domain in the world.<br/> 
          </p>
    </div>

    <Track />
     </>
     
  )
}

export default Navbar