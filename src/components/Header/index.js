import React from "react";
import {Box, Grid, Typography, Button} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

export default (props) => ( 
    <Box py={10} bgcolor="secondary.main" color="white">
        <Grid container justify="center">
            <Grid item xs={10}>
                <Box display="flex" justifyContent="space-between">
                    <WhiteTextTypography variant="h4" font-color="white"> WORKFAST </WhiteTextTypography>
                    
                    <Button variant="contained" color="primary" disableElevation> COMPRAR SUSCRIPCION </Button>
                </Box> 
            </Grid>
        </Grid>
    </Box>
);