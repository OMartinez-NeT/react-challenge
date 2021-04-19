import React from 'react'
import {Grid} from "@material-ui/core";
import PropertyDetailGallery from "../../components/PropertyGallery/PropertyDetailGallery";
import PropertyDescription from "../../components/PropertyDescription/PropertyDescription";

const Detail = () => {


    return (
        <Grid
            container
            direction="row"
        >

            <Grid item container justify="center" xs={8} >
                <PropertyDetailGallery/>
            </Grid>
            <Grid item container alignItems="flex-start" justify="center"   xs={4} >

                <PropertyDescription/>
            </Grid>

        </Grid>

    )
}
export default Detail;
