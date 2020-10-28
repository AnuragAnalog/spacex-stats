import "../commoncss.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UpcomingCores() {
    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState({cores: []})

    function fetchData() {
      const url = "https://api.spacexdata.com/v3/cores/upcoming";

    axios
        .get(url)
        .then((res) => {setIsLoaded(true); setItems({cores: res.data});}, 
        (error) => {setIsLoaded(true); setError(true);});
    }

    useEffect(() => {    
        fetchData();
    });

    if (error) {
        return <div> Error: {error.message} </div>;
    } else if (!isLoaded) {
        return <div> Loading.... </div>;
    }
    else {
        return (
            <div>
                <h1> Upcoming Cores Timeline of SpaceX </h1>
                <Link to='/'> Click here to go to Home page </Link>
                <ul>
                    {items['cores'].map((core, index) => (
                        <li class='card' key={index}>
                            Core Serial: {core['core_serial']} <br/>
                            Core Status: {core['status']} <br/>
                            Water Landings?: {core['water_landing']} <br/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default UpcomingCores;