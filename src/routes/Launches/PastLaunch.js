import "../commoncss.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

function PastLaunch() {
    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState({launches: []})

    function fetchData() {
      const url = "https://api.spacexdata.com/v3/launches/past"; 
    //   console.log(typeof res.json())

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
                <h1> A Past Launch Timeline of SpaceX </h1>
                <ul>
                    {items['launches'].map((launch, index) => (
                        <li class='card' key={index}>
                            Mission Name: {launch['mission_name']} <br/>
                            Is it success?: {launch['launch_success'] ? "Yes" : "No"} <br/>
                            Launch Year: {launch['launch_year']} <br/>
                            Rocket Name: {launch['rocket']['rocket_name']} <br/>
                            Rocket Type: {launch['rocket']['rocket_type']} <br/>
                            Launch Site: {launch['launch_site']['site_name']} <br/>
                        </li>
                    ))}
                </ul>
                <Button component={Link} variant='info' to='/'> Home page </Button>
            </div>
        );
    }
}

export default PastLaunch;