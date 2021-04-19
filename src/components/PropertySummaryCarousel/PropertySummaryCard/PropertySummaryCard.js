import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './PropertySummaryCard.css'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});


const PropertySummaryCard = () =>{

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    padding="4rem"
                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Price 100$
                    </Typography>
                    {/*<Typography variant="body2" color="textSecondary" component="p">*/}
                    {/*    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging*/}
                    {/*    across all continents except Antarctica*/}
                    {/*</Typography>*/}
                </CardContent>
            </CardActionArea>

        </Card>
    );
}

export default PropertySummaryCard;
