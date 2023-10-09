import React from 'react'
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import "./ShimmerCard.css"
const ShimmerCard = () => {
    return (
        <Card sx={{ maxWidth: 254, minWidth: 254, height: 302.45 }} elevation={1} className='skeleton-card'>
            <Skeleton
                variant='rectangle'
                animation='wave'
                width={254}
                height={140}
                className='skeleton-image'
            />
            <Skeleton variant="text" sx={{ fontSize: '2rem', marginBottom: '0.5rem', marginLeft: '0.5rem'}} />
            <Skeleton variant="text" sx={{ fontSize: '2rem', marginLeft: '0.5rem' }} />

        </Card>
    )
}

export default ShimmerCard


// infinite scrolling
// debouncing
// engineering
// dark mode