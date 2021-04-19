import React from 'react'
import './ListingItem.css'
import {Container, Grid} from "@material-ui/core";
import PropertySummaryCard from "../../PropertySummaryCarousel/PropertySummaryCard/PropertySummaryCard";
import ListeningGallery from "../ListingGallery/ListingGallery";
import {useHistory} from "react-router-dom";
import PropertyOverview from "../../PropertyOverview/PropertyOverview";

const ListingItem = (props) => {

    const history = useHistory();

    const showDetailPage = () =>{
        console.log('GO DETAIL');
        history.push({
            pathname: '/detail',
            state:{
                propertyId: 'id1'
            }
        })
    }


    return (
        <div className={'listing-item-container'}  onClick={showDetailPage}>
            <Grid
                container
                justify="space-evenly"
                direction="row"
            >
                <Grid item container xs={3} >
                    <Grid item container xs={12} >

                        <PropertySummaryCard/>
                    </Grid>
                </Grid>
                <Grid item container  xs={3} direction={'column'}>
                    <PropertyOverview/>
                </Grid>
                <Grid item container justify="center" xs={3} >
                    <ListeningGallery/>
                </Grid>
            </Grid>

        </div>
    )
}


export default ListingItem;
