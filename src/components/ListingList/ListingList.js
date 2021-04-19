import React from 'react'
import ListingItem from "./ListingItem/ListingItem";
import ListingPaginator from "./ListingPaginator/ListingPaginator";

const ListingList = (props) => {


    return (
        <>
            <h2> {props.title}</h2>
            <ListingItem title={'Tests'}/>
            <ListingItem title={'Tests'}/>
            <ListingItem title={'Tests'}/>
            <ListingItem title={'Tests'}/>
            <ListingItem title={'Tests'}/>
            <ListingPaginator/>
        </>
    )
}


export default ListingList;
