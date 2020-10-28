import "../commoncss.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllCapsules() {
    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState({capsules: []})

    function fetchData() {
      const url = "https://api.spacexdata.com/v3/capsules";

    axios
        .get(url)
        .then((res) => {setIsLoaded(true); setItems({capsules: res.data});}, 
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
                <h1> A Complete Capsule Timeline of SpaceX </h1>
                <ul>
                    {items['capsules'].map((capsule, index) => (
                        <li class='card' key={index}>
                            Capsule ID: {capsule['capsule_id']} <br/>
                            Capsule Status: {capsule['status']} <br/>
                            Capsule Type: {capsule['type']} <br/>
                            Number of Landings: {capsule['landings']} <br/>
                        </li>
                    ))}
                </ul>
                <Link to='/'> Click here to go to Home page </Link>
            </div>
        );
    }
}

export default AllCapsules;