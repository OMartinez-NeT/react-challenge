import React from 'react'
import { Grid } from '@material-ui/core';
import "./Header.css"

const Header = () => {

    return (

            <div className="header-fixed">
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    direction="row"

                >

                    <Grid item container justify="center" xs={4} >
                        <Grid item container justify="center" xs={6}  >
                            LINK 1
                        </Grid>
                        <Grid item container justify="center" xs={6} >
                            LINK 2
                        </Grid>
                    </Grid>
                    <Grid item container justify="center" xs={4} >
                        Hooray something is here!
                    </Grid>
                    <Grid item container justify="center" xs={4} >
                        <Grid item container justify="center" xs={6} >
                            LINK 1
                        </Grid>
                        <Grid item container justify="center" xs={6} >
                            LINK 2
                        </Grid>
                    </Grid>
                </Grid>
            </div>

    )
}


export default Header;
