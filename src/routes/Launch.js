import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";

function Launch() {
    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState({latest: [], next: []})

    function fetchData() {
        const url_latest = "https://api.spacexdata.com/v3/launches/latest";
        const url_upcoming = "https://api.spacexdata.com/v3/launches/next";

        axios
            .get(url_latest)
            .then((res) => {setIsLoaded(true); setItems({latest: res.data});}, 
            (error) => {setIsLoaded(true); setError(true);});

        axios
            .get(url_upcoming)
            .then((res) => {setIsLoaded(true); setItems({next: res.data});}, 
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
    return (
        <div>
            <h1> Launches </h1>
            <ButtonGroup orientation="vertical" color="primary" aria-label="vertical contained primary button group" variant="contained">
                <Button component={Link} to='/launches-all'> All Launches </Button>
                <Button component={Link} to='/launches-past'> Past Launches </Button>
                <Button component={Link} to='/launches-upcoming'> Upcoming Launches </Button>
            </ButtonGroup>
        </div>
    )
}

export default Launch;