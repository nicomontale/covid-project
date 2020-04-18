import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards=({data: {confirmed,recovered, deaths, lastUpdate} })=> {
   if(!confirmed) {
       return 'Loading...';
   }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
            <Grid item component={Card}  xs={12} md={3} className={cx(styles.cards, styles.infected)}>
            <CardContent className={styles.border}>
            <Typography color="textSecondary" gutterBottom>Infetti</Typography>
            <Typography varaint="h5">
            <CountUp
            start={0}
            end={confirmed.value}
            duration={2.5}
            separator=","
            
            />

            
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">Casi infetti</Typography>
            </CardContent>
            </Grid>
            <Grid item component={Card}  xs={12} md={3} className={cx(styles.cards, styles.recovered)}>
            <CardContent className={styles.border}>
            <Typography color="textSecondary" gutterBottom>Ricoverati</Typography>
            <Typography varaint="h5"> 
   
            <CountUp
            start={0}
            end={recovered.value}
            duration={2.5}
            separator=","
            
            />
            
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">Casi ricoverati</Typography>
            </CardContent>
            </Grid>
            <Grid item component={Card}  xs={12} md={3} className={cx(styles.cards, styles.deaths)}>
            <CardContent className={styles.border}>
            <Typography color="textSecondary" gutterBottom>Deceduti</Typography>
            <Typography varaint="h5">
    
            <CountUp
            start={0}
            end={deaths.value}
            duration={2.5}
            separator=","
            
            />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">Casi deceduti</Typography>
            </CardContent>
            </Grid>
            
            </Grid>
        </div>
    )
} 
export default Cards;
