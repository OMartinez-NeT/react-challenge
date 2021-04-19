import React from 'react'
import './PropertyDescription.css';
import PropertyOverview from "../PropertyOverview/PropertyOverview";
import {Grid} from "@material-ui/core";

const PropertyDescription = () => {



    return (
        <div className="property-description-container">
            <div className="property-description-header">
                <h2>Property Information</h2>
                <h3>Overview</h3>
            </div>
            <hr/>
            <PropertyOverview/>

            <div className="property-description-header">
                <h3>Facts and features</h3>
            </div>
            <hr/>
            <PropertyOverview/>



        </div>
    )

}


export default PropertyDescription;
