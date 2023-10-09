import React from 'react'
import axios from "axios";
import Header from "./Header"
import CardComponent from './CardComponent'
import { useState, useEffect } from "react"
import Grid from '@mui/material/Grid';
import ShimmerCard from "./ShimmerCard"
import './Body.css'
const Body = () => {

    const shimmerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const [cardList, setCardList] = useState([])

    const getData = async () => {
        const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5399241&lng=88.3874402&page_type=DESKTOP_WEB_LISTING"
        const cardList = await axios.get(url);
        return cardList.data.data.cards[2].data.data.cards;
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setCardList(data);
        }
        fetchData();
    }, []);

    return (
        <div className='parent'>
            <Header />
            {cardList.length != 0 ? (
                <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='container'>
                    {cardList.map((cardItem) => {
                        const card = cardItem.data
                        return <Grid item xs={12} sm={6} md={3} key={card.uuid} className='item'><CardComponent cardData={card} /></Grid>
                    })}
                </Grid>
            ) : (
                <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='container'>
                    {shimmerArray.map((cardItem, index) => {
                        return <Grid item xs={12} sm={6} md={3} key={index} className='item'><ShimmerCard /></Grid>
                    })}
                </Grid>
            )}
        </div>
    )
}

export default Body