import "../commoncss.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllLaunch() {
    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState({launches: []})

    function fetchData() {
      const url = "https://api.spacexdata.com/v3/launches/";

    axios
        .get(url)
        .then((res) => {setIsLoaded(true); setItems({launches: res.data});}, 
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
                <h1> A Complete Launch Timeline of SpaceX </h1>
                <ul>
                    {items['launches'].map((launch, index) => (
                        <li class='card' key={index}>
                            Mission Name: {launch['mission_name']} <br/>
                            Is it success?: {launch['launch_success'] ? "Yes" : "No"} <br/>
                            Launch Year: {launch['launch_year']} <br/>
                            Upcoming: {launch['upcoming'] ? "Yes" : "No"} <br/>
                            Rocket Name: {launch['rocket']['rocket_name']} <br/>
                            Rocket Type: {launch['rocket']['rocket_type']} <br/>
                            Launch Site: {launch['launch_site']['site_name']} <br/>
                        </li>
                    ))}
                </ul>
                <Link to='/'> Click here to go to Home page </Link>
            </div>
        );
    }
}

export default AllLaunch;