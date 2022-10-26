import React from 'react'
import axios from "axios"
import { useEffect,useState } from 'react'

const Weather = () => {

    const [weather, setWeather] = useState([])
    const [input, setInput] = useState("")
    let weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const getWeather = async ()=>{
        const url = "http://localhost:3000/config/wheatherData.json";

        try {
            const {data} = await axios(url);
            setWeather(data)
        } catch (error) {
            console.log(error)
        }
    }  

const handleWeather = ()=>{
        
    const filtered = weather.filter((item)=> new Date(item.date).toLocaleDateString('fr-CA') === input)
    setWeather(filtered)
}



useEffect(() => {
  getWeather();
}, [input]);


    

  return (
    <div className='container text-center my-4 p-3'>
        <div>
            <h1 className='display-5 text-danger mb-4'>Today's Weather</h1>
            <input type="date" name="date" id="date" className='form-control w-50 mx-auto'  min='2022-10-17' max='2022-10-24' onChange={(e)=> setInput(e.target.value)}/> <br />
            <button className='w-50 btn btn-danger' onClick={handleWeather}>Get Weather</button>
        </div> 
        <div className='wScroll'>
            {weather.map((item,i)=>{
            const {tempeture, type , img, date} = item;
            return(
        <div className="card mx-auto mt-2" style={{ width: "18rem" }} key={i}>
            <img src={img} className="card-img-top w-50 mx-auto" alt="img" />
            <div className="card-body">
                <p className="card-text mb-3 display-5">{tempeture}</p>
                <p className="card-text">{type}</p>
                <p className='card-text'>{weekday[new Date(date).getDay()]}</p>
            </div>
        </div>
            )
        })} 
        </div>        
    </div>
  )
}

export default Weather