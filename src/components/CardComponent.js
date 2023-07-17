import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./CardComponent.css"

const CardComponent = (props) => {

    const { cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwoString } = props.cardData
    return (
        <div className='card'>
            <Card sx={{ maxWidth: 254, minWidth: 254}} elevation={0}>
                <CardMedia
                    component="img"
                    alt={name}
                    height="140"
                    image={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
                    className='image'
                />
                <CardContent>
                    <Typography gutterBottom component="div" className='card-name' sx={{ letterSpacing: 0, lineHeight: 'normal' }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='typography-1' sx={{ letterSpacing: 0}}>
                        {cuisines.join(", ")}
                    </Typography>
                    <Typography variant="body2" className='typography-2' sx={{ letterSpacing: 0 }}>
                        <span className='star-rating'>&#9733;{avgRating}</span>
                        <span>{slaString}</span>
                        <span>{costForTwoString}</span>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className='card-btn'>Add to Cart</Button>
                </CardActions>
            </Card>
        </div>

    )
}

export default CardComponent
