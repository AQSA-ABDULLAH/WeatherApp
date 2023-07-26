import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { UilCloud } from '@iconscout/react-unicons';
import { UilSearch } from '@iconscout/react-unicons';
import "./css/style.css";

function Weather() {
    const [city, setCity] = useState();
    const [search, setSearch] = useState("Lahore");


    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=621adacc39141f4a333b98a241efe478`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main)
            // await axios.get(url).then((response)=>{
            //     const myData=(response.data)
            //     setCity(myData)
            // })
            // console.log(city,"******")
            // .then(data => console.log(data))
            // .then(data => setCity(data));
        }
        fetchApi();
    }, [search]);


    return (
        <div className="p-8 mt-20">
            <div className="flex items-center justify-center">
                <div className="bg-white p-2 px-5 rounded-full shadow-md flex items-center">
                    <UilSearch />
                    <input type="text" className="outline-none focus:ring-blue-500 rounded-full px-3 w-96"
                        onChange={(event) => { setSearch(event.target.value) }}
                        placeholder="Search..."
                    />
                </div>
            </div>

            {!city ? (
                <p>No Data Found</p>
            ) : (
                <div>
                    <div className="flex text-white flex-col mt-5 mr-4">
                        <p className="text-4xl font-bold">{search}</p>
                        <p className="text-lg">Wednesday 1 April</p>
                    </div>

                    <div className="flex mt-8 p-5 text-white">
                        <div className="flex w-1/2 px-14">
                            <div><i className="fas fa-cloud text-white-500 icon"></i></div>
                            <div className="px-5">
                                <p className="m-2 text-6xl ">{city.temp}</p>
                                <p className="m-2 text-lg">Overcast clouds</p>
                            </div>
                        </div>
                        <div className="w-1/2 divset p-5 rounded-lg">
                            <div className="flex justify-between p-4">
                                <div>
                                    <p>6</p>
                                    <p>Height</p>
                                </div>
                                <div>
                                    <p>3.1mph</p>
                                    <p>Wind</p>
                                </div>
                                <div>
                                    <p>6:40</p>
                                    <p>Sunrised</p>
                                </div>
                            </div>

                            <div className="flex justify-between p-4">
                                <div>
                                    <p>3</p>
                                    <p>Low</p>
                                </div>
                                <div>
                                    <p>70%</p>
                                    <p>Rain</p>
                                </div>
                                <div>
                                    <p>7:19</p>
                                    <p>Sunset</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            Forecast
                        </h3>
                        <div>
                            <div className="flex text-white font-bold text-lg">
                                <div className="flex text-white font-bold text-lg">
                                    <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                        <p>04.01</p>
                                        <p>6:00</p>
                                        <p><UilCloud /></p>
                                        <p>4</p>
                                    </div>
                                    <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                        <p>04.01</p>
                                        <p>6:00</p>
                                        <p><UilCloud /></p>
                                        <p>4</p>
                                    </div>
                                    <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                        <p>04.01</p>
                                        <p>6:00</p>
                                        <p><UilCloud /></p>
                                        <p>4</p>

                                    </div>
                                    <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                        <p>04.01</p>
                                        <p>6:00</p>
                                        <p><UilCloud /></p>
                                        <p>4</p>
                                    </div>
                                    <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                        <p>04.01</p>
                                        <p>6:00</p>
                                        <p><UilCloud /></p>
                                        <p>4</p>
                                    </div>
                                    <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                        <p>04.01</p>
                                        <p>6:00</p>
                                        <p><UilCloud /></p>
                                        <p>4</p>
                                    </div>
                                    <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                        <p>04.01</p>
                                        <p>6:00</p>
                                        <p><UilCloud /></p>
                                        <p>4</p>
                                    </div>
                                    <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                        <p>04.01</p>
                                        <p>6:00</p>
                                        <p><UilCloud /></p>
                                        <p>4</p>
                                    </div>
                                    <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-3">
                                        <p>04.01</p>
                                        <p>6:00</p>
                                        <p><UilCloud /></p>
                                        <p>4</p>
                                    </div>
                                    <div className="pt-4 pr-6 pb-4 pl-6 rounded-lg divTransparent mx-2">
                                        <p>04.01</p>
                                        <p>6:00</p>
                                        <p><UilCloud /></p>
                                        <p>4</p>
                                    </div>
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
