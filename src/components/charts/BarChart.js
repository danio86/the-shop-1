import React from 'react'
// import {Bar} from 'react-chartjs-2'
import { Bar,  } from "react-chartjs-2";

const BarChart = () => {
  return (
    
    <Bar
        data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
        }}
        height={200}
        width={200}
        options={{ maintainAspectRatio: false }}

        />
  )
}

export default BarChart
