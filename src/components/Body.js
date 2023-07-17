import React from 'react'
import axios from "axios";
import Header from "./Header"
import CardComponent from './CardComponent'
import { useState, useEffect } from "react"
import Grid from '@mui/material/Grid';

const Body = () => {
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
        <div>
            <Header />

            <Grid container spacing={1}>
            {cardList.map((cardItem)=>{
                const card = cardItem.data
                return <Grid item xs={6} md={3} key={card.uuid}><CardComponent cardData={card}/></Grid>
            })}
            </Grid>
        </div>
    )
}

export default Body