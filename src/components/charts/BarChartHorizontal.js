import React from 'react'
import { HorizontalBar } from "react-chartjs-2";


const BarChartHorizontal = () => {
  return (
    <div>
        <HorizontalBar

        data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Properties',
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
            // {
            //     label: 'Quantity',
            //     data: [120, 190, 30, 50, 20, 30],
            //     backgroundColor: 'orange',
            //     borderColor: 'yellow',
            //     borderWidth: 1,
            // }
        ]
            
        }}

        height={200}
        width={200}
        options={{ 
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: 10,

                }
            }
        }}
        
        />
    </div>
  )
}

export default BarChartHorizontal