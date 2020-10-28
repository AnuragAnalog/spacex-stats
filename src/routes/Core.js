import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";

function Core() {
    return (
        <div>
            <h1> Cores </h1>
            <ButtonGroup orientation="vertical" color="primary" aria-label="vertical contained primary button group" variant="contained">
                <Button component={Link} to='/cores-all'> All Cores </Button>
                <Button component={Link} to='/cores-past'> Past Cores </Button>
                <Button component={Link} to='/cores-upcoming'> Upcoming Cores </Button>
            </ButtonGroup>
        </div>
    )
}

export default Core;