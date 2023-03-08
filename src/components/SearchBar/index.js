import React from "react";
import {Box, Select, MenuItem, Typography, Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        border: "1 px solid red"
    }
})

export default (props) => { 
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Select disableUnderline variant="filled" defaultValue="Full time">
                <MenuItem value="Full time"> Full Time</MenuItem>
                <MenuItem value="Part time"> Part Time</MenuItem>
                <MenuItem value="Contract"> Contrato</MenuItem>
            </Select>
            <Select disableUnderline variant="filled" defaultValue="Remote">
                <MenuItem value="Remote"> Remoto</MenuItem>
                <MenuItem value="In-office"> Presencial</MenuItem>
                <MenuItem value="Contract"> Contrato</MenuItem>
            </Select>
            <Button variant="contained" color="primary" disableElevation> BUSCAR </Button>
        </Box>
    );
    
};