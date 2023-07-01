import React from 'react'
// import {Bar} from 'react-chartjs-2'
import { Pie, Doughnut } from "react-chartjs-2";
import Homepage from '../../pages/Homepage';

// defaults.global.tooltips.enabled = false;
// defaults.global.legend.position = 'bottom';

const PieChart = ({title, value, color}) => {
  return (
    <Doughnut
        data={{
            // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            labels: [value],
            datasets: [{
                label: 'Properties',
                data: [value, 100-value],
                backgroundColor: [
                    // 'rgba(255, 99, 132, 0.2)',
                    // 'rgba(54, 162, 235, 0.2)',
                    color,
                    // 'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    // 'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
            },
        ]
        }}
        
        height={200}
        width={200}
        options={{ 
            maintainAspectRatio: false,
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // },
            legend: {
                labels: {
                    fontSize: 10,
                    boxWidth: value,

                }
            },
            title: {
                display: true,
                text: title
            },
            // data: {
            //     display: true,
            //     Number: value
            // }
        
        }}
        />
        
  )
}

export default PieChart
