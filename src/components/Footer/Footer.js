import React from 'react'
import "./Footer.css"
import {Container, Grid} from "@material-ui/core";

const Footer = () => {


   
    return (
        <div className={'footer-container'}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item container justify="center" xs={4} direction={"column"}  alignItems={"center"} >
                    <p>Gifts Cards</p>
                    <p>Real Rewards</p>
                    <p>Store Pick Up</p>
                </Grid>
                <Grid item container justify="center" xs={4} direction={"column"}  alignItems={"center"} >
                    <p>Store Locator</p>
                    <p>Track Order</p>
                    <p>Sign up for Email</p>
                </Grid>
                <Grid item container justify="center" xs={4} direction={"column"}  alignItems={"center"} >
                    <p>Gift Now</p>
                    <p>Give Back Box</p>
                    <p>Have a question?</p>
                </Grid>
            </Grid>
        </div>


    )
}


export default Footer;
