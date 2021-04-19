import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import {Grid} from "@material-ui/core";
import React from "react";

const ListeningGallery = () => (
        <Gallery>
            <Grid
                container
                justify="space-evenly"
                alignItems="center"
                direction="row"
            >

                <Grid item container justify="center" xs={5} >
                    <Item
                        original="https://placekitten.com/1024/768?image=1"
                        thumbnail="https://placekitten.com/200/200?image=1"
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" style={{width: '150px', height:'100px'}}/>
                        )}
                    </Item>
                </Grid>
                <Grid item container justify="center" xs={5}>
                    <Item
                        original="https://placekitten.com/1024/768?image=1"
                        thumbnail="https://placekitten.com/200/200?image=1"
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" style={{width: '150px', height:'100px'}}  />
                        )}
                    </Item>
                </Grid>
                <Grid item container justify="center" xs={5}>
                    <Item
                        original="https://placekitten.com/1024/768?image=1"
                        thumbnail="https://placekitten.com/80/60?image=1"
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" style={{width: '150px', height:'100px'}}/>
                        )}
                    </Item>
                </Grid>
                <Grid item container justify="center" xs={5}>
                    <Item
                        original="https://placekitten.com/1024/768?image=1"
                        thumbnail="https://placekitten.com/80/60?image=1"
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" style={{width: '150px', height:'100px'}}/>
                        )}
                    </Item>
                </Grid>
            </Grid>

        </Gallery>

)
export default ListeningGallery;


// <Item
//     original="https://placekitten.com/1024/768?image=1"
//     thumbnail="https://placekitten.com/80/60?image=1"
//     width="1024"
//     height="768"
// >
//     {({ ref, open }) => (
//         <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
//     )}
// </Item>
// <Item
//     original="https://placekitten.com/1024/768?image=2"
//     thumbnail="https://placekitten.com/80/60?image=2"
//     width="1024"
//     height="768"
// >
//     {({ ref, open }) => (
//         <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
//     )}
// </Item>
// <Item
//     original="https://placekitten.com/1024/768?image=1"
//     thumbnail="https://placekitten.com/80/60?image=1"
//     width="1024"
//     height="768"
// >
//     {({ ref, open }) => (
//         <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
//     )}
// </Item>
// <Item
//     original="https://placekitten.com/1024/768?image=1"
//     thumbnail="https://placekitten.com/80/60?image=1"
//     width="1024"
//     height="768"
// >
//     {({ ref, open }) => (
//         <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
//     )}
// </Item>
