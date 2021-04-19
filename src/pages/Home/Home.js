import React from 'react'
import { Grid } from '@material-ui/core';
import SearchBar from '../../components/SearchBar/SearchBar';
import PropertySummaryCarousel from '../../components/PropertySummaryCarousel/PropertySummaryCarousel';
import './Home.css'

const Home = () => {

   
    return (
        <>
            <SearchBar/>
            <div className={'property-summary-spacing'}>
                <PropertySummaryCarousel title={'Most visited'}/>
            </div>
            <div className={'property-summary-spacing'}>
                <PropertySummaryCarousel title={'Most visited'}/>
            </div>

        </>
        
    )
}


export default Home;
