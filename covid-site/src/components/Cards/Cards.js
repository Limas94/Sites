import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
    return (
        <div className = {styles.container}>
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card} xs = {12} md = {3} className = {[styles.card, styles.infected]}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Заражённых</Typography>
                        <Typography variant = "h5">
                            <CountUp start = {0} end = {confirmed.value} duration = {3} separator = "," />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Количество активных случаев COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs = {12} md = {3} className = {[styles.card, styles.recovered]}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Выздоровело</Typography>
                        <Typography variant = "h5">
                            <CountUp start = {0} end = {recovered.value} duration = {3} separator = "," />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Количество выздоровевших от COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs = {12} md = {3} className = {[styles.card, styles.deaths]}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Летальных исходов</Typography>
                        <Typography variant = "h5">
                            <CountUp start = {0} end = {deaths.value} duration = {3} separator = "," />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Количество смертей от COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
};

export default Cards;