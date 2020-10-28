import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

function Home() {
    return (
        <div>
            <h1> SpaceX Launch Updates </h1>
            <Button component={Link} variant='contained' color='primary' to='/launches'> Launches </Button>
            <Button component={Link} variant='contained' color='primary' to='/cores'> Cores </Button>
            <Button component={Link} variant='contained' color='primary' to='/capsules'> Capsules </Button>
        </div>
    )
}

export default Home;