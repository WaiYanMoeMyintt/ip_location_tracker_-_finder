import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Finder = () => {

  const [value,setValue]  = useState("");
  const [totalData,setData] = useState({});
  console.log(totalData)


   useEffect(()=>{
       const url = `https://api.ipgeolocation.io/ipgeo?ip=${value}&apiKey=208a7f10f7e14b8498c28018343cb901`;

       if(value !== ''){
          try {
            fetch(url).then(res=>res.json())
            .then(ip=> setData(ip));
            console.log(totalData.ip);


          }

          catch{
              alert("403 error");
          
          }
       }
       else {
            console.log("error");
       }
   },[value]);

  return (
    <>
         <div className='ip-header'>
         <div className='ip-title'>
         <h3>IP Address Finder</h3>
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
          <h4>What is IP Address Finder ?</h4>
          <p>
             IP lookup is a procedural technique, in the form of IP query <br />
            search in the database / presentation of results, which is <br />
            primarily intended to show the geolocation of the requested<br />
            IP address. <br />
          </p>
      </div>

      <form className='ip-finder'>
          <input onChange={event=> setValue(event.target.value)} value={value} type="text" placeholder = "search IP address"/>
          <button onClick={(e)=> e.preventDefault()}>Enter any IPv4, IPv6 address or domain name</button>

          <div className='tracker'>
           <h4>What is my IP Address</h4>
           <div className='tracker-info'>
                 <div className='tracking-info'>
                      {
                         <div className='tracking-details'>

                            <div className='info'>
                             <h5>Your IP Address :</h5>
                              <p>{totalData.ip}</p>
                            </div>

                            <div className='info'>
                             <h5>Country :</h5>
                              <p>{totalData.country_name}</p>
                            </div>

                            <div className='info'>
                             <h5>City:</h5>
                              <p>{totalData.state_prov}</p>
                            </div>

                            <div className='info'>
                             <h5>Languages:</h5>
                              <p>{totalData.languages}</p>
                            </div>

                            <div className='info'>
                             <h5>Country Capital:</h5>
                              <p>{totalData.country_capital}</p>
                            </div>

                            <div className='info'>
                             <h5>Country Continent:</h5>
                              <p>{totalData.continent_name}</p>
                            </div>
                            
                            <div className='info'>
                             <h5>Internet Protocol: </h5>
                              <p>IPV4</p>
                            </div>

                            <div className='info'>
                             <h5>Country Flag:</h5>
                              <p>
                                 <img src = {totalData.country_flag} alt = {totalData.country_name} />
                              </p>
                            </div>

                            <div className='info'>
                             <h5>ISP:</h5>
                              <p>{totalData.isp}</p>
                            </div>

                            <div className='info'>
                             <h5>Organization:</h5>
                              <p>{totalData.organization}</p>
                            </div>
                         </div>  
                      }
                 </div>
           </div>
         </div>
      </form>
    
    </>
  )
}

export default Finder