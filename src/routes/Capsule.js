import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";

function Capsule() {
    return (
        <div>
            <h1> Capsules </h1>
            <ButtonGroup orientation="vertical" color="primary" aria-label="vertical contained primary button group" variant="contained">
                <Button component={Link} to='/capsules-all'> All Capsules </Button>
                <Button component={Link} to='/capsules-past'> Past Capsules </Button>
                <Button component={Link} to='/capsules-upcoming'> Upcoming Capsules </Button>
            </ButtonGroup>
        </div>
    )
}

export default Capsule;