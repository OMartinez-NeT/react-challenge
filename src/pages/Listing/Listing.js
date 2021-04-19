import React from 'react'
import PropertySummaryCarousel from '../../components/PropertySummaryCarousel/PropertySummaryCarousel';
import ListingList from "../../components/ListingList/ListingList";

const Listing = () => {

   
    return (
        <>
            <PropertySummaryCarousel title={'Your favorite homes'}/>
            <ListingList title={'List of homes'}/>
        </>
    )
}
export default Listing;
