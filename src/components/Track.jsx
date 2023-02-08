import axios from 'axios';
import React,{useState,useEffect} from 'react';
const Track = () => {
    const [track,setTracker] = useState({});

    useEffect(()=>{
          const url = "https://api.ipgeolocation.io/ipgeo?apiKey=208a7f10f7e14b8498c28018343cb901";
          try {
             axios.get(url)
             .then(ip=> setTracker(ip.data));
          }
          catch {
              return false;
          }
   })

  return (
    <div className='tracker'>
           <h4>What is my IP Address</h4>
           <div className='tracker-info'>
                 <div className='tracking-info'>
                      {
                         <div className='tracking-details'>

                            <div className='info'>
                             <h5>Your IP Address :</h5>
                              <p>{track.ip}</p>
                            </div>

                            <div className='info'>
                             <h5>Country :</h5>
                              <p>{track.country_name}</p>
                            </div>

                            <div className='info'>
                             <h5>City:</h5>
                              <p>{track.state_prov}</p>
                            </div>

                            <div className='info'>
                             <h5>Languages:</h5>
                              <p>{track.languages}</p>
                            </div>

                            <div className='info'>
                             <h5>Country Capital:</h5>
                              <p>{track.country_capital}</p>
                            </div>

                            <div className='info'>
                             <h5>Country Continent:</h5>
                              <p>{track.continent_name}</p>
                            </div>
                            
                            <div className='info'>
                             <h5>Internet Protocol: </h5>
                              <p>IPV4</p>
                            </div>

                            <div className='info'>
                             <h5>Country Flag:</h5>
                              <p>
                                 <img src = {track.country_flag} alt = {track.country_name} />
                              </p>
                            </div>

                            <div className='info'>
                             <h5>ISP:</h5>
                              <p>{track.isp}</p>
                            </div>

                            <div className='info'>
                             <h5>Organization:</h5>
                              <p>{track.organization}</p>
                            </div>
                         </div>  
                      }
                 </div>
           </div>
    </div>
  )
}

export default Track