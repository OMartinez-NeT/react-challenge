import "./PropertyOverview.css"


const PropertyOverview = (props) => {

    return (
            <div className={'property-overview-description'}>
                <div>Neigborhood: Kendal Lakes</div>
                <div>
                    <div style={{'display': 'inline-block'}}>Beds: 1</div>
                    <div style={{'display': 'inline-block'}}>Baths: 5</div>
                </div>
                <div>Adresss: BLABFDFDFDFDFDDFDDFLA</div>
                <div>City: CA</div>
                <div>Zip Code: 1010</div>
                <div>Available: YES</div>
            </div>
    )
}

export default PropertyOverview;
