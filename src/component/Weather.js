import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import cloudImage from './Images/cloud.png';
import { UilSearch } from '@iconscout/react-unicons';
import "./css/style.css";

function Weather() {
    const [data, setData] = useState({});

    const [name, setName] = useState('');

    const handleClick = () => {
        if (name !== "") {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=621adacc39141f4a333b98a241efe478&units=metric`;
            axios.get(url)
                .then(res => {
                    setData({
                        ...data,
                        celcius: res.data.main.temp,
                        name: res.data.name,
                        humidity: res.data.main.humidity,
                        feels_like: res.data.main.feels_like,
                        temp_min: res.data.main.temp_min,
                        temp_max: res.data.main.temp_max,
                        pressure: res.data.main.pressure,
                        visibility: res.data.visibility,
                        speed: res.data.wind.speed,
                        Latitude: res.data.coord.lat,
                        longitude: res.data.coord.lon,
                        country: res.data.sys.country,
                        sunrise: moment.unix(res.data.sys.sunrise).format('HH:mm:ss'), // Convert UNIX to seconds format
                        sunset: moment.unix(res.data.sys.sunset).format('HH:mm:ss'),
                         
                    });
                })
                .catch(err => console.log(err));
        }
    }


    const isColdWeather = data.celcius < 20;


    return (
        <div className={`p-12 pt-20 ${isColdWeather ? 'cold-weather' : 'hot-weather'}`}>
            <div className="flex items-center justify-center">
                <div className="bg-white p-2 px-5 rounded-full shadow-md flex items-center">
                    <UilSearch />
                    <input type="text" className="outline-none focus:ring-blue-500 rounded-full px-3 w-96"
                        onChange={e => setName(e.target.value)}
                        placeholder="Search..."
                    />
                    <button type="submit" onClick={handleClick}>Search</button>
                </div>
            </div>



            {!data ? (
                <p>No Data Found</p>
            ) : (
                <div>
                    <div className="flex text-white flex-col mt-5 mr-4">
                        <p className="text-4xl font-bold">{data.name} , {data.country}</p>
                        <p className="text-lg">Wednesday 1 April</p>
                    </div>

                    <div className="flex mt-8 p-5 text-white">
                        <div className="flex w-1/2 px-14">
                            <div>
                            <img src={cloudImage} className="w-24 h-24" />
                            </div>
                            <div className="px-5">
                                <p className="m-2 text-6xl ">{data.celcius}°</p>
                                <p className="m-2 text-lg">Weather Overcast</p>
                            </div>
                        </div>
                        <div className="w-1/2 divset p-5 rounded-lg font-bold text-xl">
                            <div className="flex justify-between p-4">
                                <div className='divcenter'>
                                    <p>{Math.round(data.celcius)}</p>
                                    <p>Degree Temp</p>
                                </div >
                                <div className='divcenter'>
                                    <p>{data.Latitude} </p>
                                    <p>Latitude</p>
                                </div >
                                <div className='divcenter'>
                                    <p>{data.sunrise}</p>
                                    <p>Sunrised</p>
                                </div>
                            </div>

                            <div className="flex justify-between p-4">
                                <div className='divcenter'>
                                    <p>{data.speed}</p>
                                    <p>Wind Speed</p>
                                </div>
                                <div className='divcenter'>
                                    <p>{data.longitude}</p>
                                    <p>longitude</p>
                                </div>
                                <div className='divcenter'>
                                    <p>{data.sunset}</p>
                                    <p>Sunset</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex text-white font-bold text-lg pt-10 px-2">
                            <div className="flex text-white font-bold text-xl">
                                <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                    <p>Feels Like</p>
                                    <p>{Math.round(data.feels_like)}°</p>
                                </div>
                                <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                    <p>Minimum Temprature</p>
                                    <p>{Math.round(data.temp_min)}°</p>
                                   
                                </div>
                                <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                    <p>Maximum Temprature</p>
                                    <p>{Math.round(data.temp_max)}°</p>
                                </div>
                                <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                    <p>Pressure</p>
                                    <p>{Math.round(data.pressure)}</p>
                                </div>
                                <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                    <p>Humidity</p>
                                    <p>{Math.round(data.humidity)}</p>
                                    
                                </div>
                                <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                    <p>Visibility</p>
                                    <p>{data.visibility}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}

export default Weather;
