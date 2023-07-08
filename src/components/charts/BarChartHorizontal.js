// import { toHaveValue } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'
import { HorizontalBar } from "react-chartjs-2";
// import "chartjs-plugin-datalabels" from ;
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js"></script>

const BarChartHorizontal = () => {
  return (
    <div>
        <HorizontalBar

        data={{
            labels: ['Social Media', 'Marcetpaces', 'Websites', 'Digital Ads', 'Others'],
            datasets: [{
                
                data: [92, 79, 33, 15, 25, 13],
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
                // label: 'Quantity',
                data: [100, 100, 100, 100, 100, 100],
                // backgroundColor: 'grey',
                backgroundColor: 'rgba(232,232,232)',
                // borderColor: 'yellow',
                borderWidth: 1,
            }
        ]
            
        }}

        height={200}
        width={200}
        options={{ 
           
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    stacked: false,
                    gridLines: {
                        display:false
                    },
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                            return value + '%' ;
                        }
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        display:false
                    },
                    
                        // ticks: {
                        //     // Include a dollar sign in the ticks
                        //     callback: function(value, index, values) {
                        //         return '$' + value;
                        //     }
                        // }
                    
                    
                }]
            },
            title: {
                display: true,
                text: 'Property Referrals'
            },
            legend: {
                display: false,
            },
            datalabels: {
                display: true,
                color: "black"
              },
              
        }}
        
        />
    </div>
  )
}

export default BarChartHorizontal