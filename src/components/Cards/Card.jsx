import "./card.css"
import React from 'react'
import cardImg from "../../Assets/card image/card-img.jpg"
import Card from '@mui/material/Card';
import starIcon from "../../Assets/card image/star.png"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DonateBtn from "../DonateBtn/DonateBtn";
import { index } from "d3-array";

const Cards = ({ data }) => {

    return (
        <div >
            {data.map((item) => (
                <Card className="card" sx={{ maxWidth: 345 }}>
                    <img className="card-img" src={cardImg} alt="card image" />
                    <CardContent>
                        <div className="card-btn">
                            <DonateBtn />
                        </div>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <div className="card-rating-request">
                            <div className="card-rating">
                                <img className="star-icon" src={starIcon} alt="icon" />
                                <h6>{item.rating}</h6>
                            </div>
                            <h6>{item.price}</h6>
                        </div>
                    </CardActions>
                </Card>
            ))

            }
        </div>
    )
}

export default Cards
