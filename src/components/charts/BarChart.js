import React from 'react'
// import {Bar} from 'react-chartjs-2'
import { Bar, Line, Pie, defaults  } from "react-chartjs-2";

// defaults.global.tooltips.enabled = false;
defaults.global.legend.position = 'bottom';

const BarChart = ({title}) => {
  return (
    <>
    <Bar
        data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Last Month',
                data: [152, 119, 33, 15, 25, 13],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                // backgroundColor: [
                //     'rgba(255, 99, 132, 0.2)',
                //     'rgba(54, 162, 235, 0.2)',
                //     'rgba(255, 206, 86, 0.2)',
                //     'rgba(75, 192, 192, 0.2)',
                //     'rgba(153, 102, 255, 0.2)',
                //     'rgba(255, 159, 64, 0.2)'
                // ],
                borderColor: 'rgba(54, 162, 235, 1)',
                // borderColor: [
                //     'rgba(255, 99, 132, 1)',
                //     'rgba(54, 162, 235, 1)',
                //     'rgba(255, 206, 86, 1)',
                //     'rgba(75, 192, 192, 1)',
                //     'rgba(153, 102, 255, 1)',
                //     'rgba(255, 159, 64, 1)'
                // ],
                borderWidth: 1,
            },
            {
                label: 'Running Month',
                data: [120, 190, 30, 50, 20, 30],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }
        ]
        }}
        
        height={200}
        width={200}
        options={{ 
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value, index, values) {
                            return value + 'K';
                        }
                        
                    },
                    labels: ['K'],

                }]
            },
            legend: {
                align: 'end',
                position: 'top',
                labels: {
                    fontSize: 10,
                    

                }
            },
            title: {
                // padding: {
                //     left: 0,
                //     right: 0,
                //     top: 0,
                //     bottom: 0
                // },
                display: true,
                text: title,
                fontSize: 30
            },
            
            
            
        }}
        />
    {/* <Bar
        data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [152, 119, 33, 15, 25, 13],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
            },
            {
                label: 'Quantity',
                data: [120, 190, 30, 50, 20, 30],
                backgroundColor: 'orange',
                borderColor: 'yellow',
                borderWidth: 1,
            }
        ]
        }}
        
        height={200}
        width={200}
        options={{ 
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }}
        /> */}
    </>
        
  )
}

export default BarChart
