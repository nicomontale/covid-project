import React, {useState, useEffect } from 'react'
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css'
export default function Chart({data:{confirmed, deaths,recovered}, country}) {

    const [dailyData, setDailyData]=useState({});

    useEffect(()=> {
        const fetchAPI= async ()=> {
           
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    },[])

    if(!confirmed) {
        return 'Loading';
    }
    const lineChart = (
        dailyData.length
        ?
<Line
data={{
    labels:dailyData.map(({date})=> date),
   
    datasets: [{
        data:dailyData.map(({confirmed})=> confirmed),
        label: 'Infected',
        borderColor:'#3333ff',
    }, {
        data:dailyData.map(({deaths})=> deaths),
        label:'Deaths',
        borderColor:'red',
        backgroundColor:'rgba(255,0,0,0.5)',
        fill: true


    }],
}}
/> : null

    );

    const barChar= 
    confirmed  ? (
        <Bar data={{
           labels:['Infettati', 'Ricoverati', 'Deceduti'],
           datasets: [{
               label: 'Persone',
               backgroundColor: ['rgba(11, 11, 116, 0.5)','rgba(40, 210, 40, 0.5)','rgba(255,0,0, 0.5)'],
               data:[confirmed.value, recovered.value,deaths.value]
           }],
           
        }}
        options={{
            legend: {display: false},
            title: {display: true, text:`Situazione attuale ${country}`},

        }}
        
        />
        
        
    ) : null;
    return (
        <div className={styles.container}>
            {country ? barChar : lineChart}
        </div>
    )
}
