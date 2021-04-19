import React, {useRef} from 'react'
import {Grid} from "@material-ui/core";
import "./PropertyDetailGallery.css";
import PropertyDetailModalCarousel from "./PropertyDetailModalCarousel/PropertyDetailModalCarousel";

const PropertyDetailGallery = () => {


    const detailCarousel = useRef();

    return (

        <>
            <Grid item container justify="center" xs={12} >
                <div className={'main-picture-container'}>
                    <div className="main-picture" onClick={() => detailCarousel.current.getAlert(0)}>
                        <img src={'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'}/>
                    </div>
                </div>
            </Grid>
            <Grid item container justify="center" xs={12} spacing={1}>

                <Grid item xs={6} >
                    <div className="complement-picture" onClick={() => detailCarousel.current.getAlert(1)}>
                        <img src={'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'}/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="complement-picture" >
                        <img src={'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'}/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="complement-picture" >
                        <img src={'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'}/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="complement-picture" >
                        <img src={'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'}/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="complement-picture" >
                        <img src={'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'}/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="complement-picture" >
                        <img src={'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'}/>
                    </div>
                </Grid>

            </Grid>

            <PropertyDetailModalCarousel  ref={detailCarousel}/>

        </>


    )
}
export default PropertyDetailGallery;
