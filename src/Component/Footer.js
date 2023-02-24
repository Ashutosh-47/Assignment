import React from 'react'
import "./Footer.css"
import Chart from "react-google-charts";



const data1 = [
  ['City', 'Recovered', 'Cases'],
  ['New York City, NY', 8175000, 8008000],
  ['Los Angeles, CA', 3792000, 3694000],
  ['Chicago, IL', 2695000, 2896000],
  ['Houston, TX', 2099000, 1953000],
  ['Philadelphia, PA', 1526000, 1517000],  
  ['Europe DEU', 5679884,  8190230],
  ['Europe DNK', 8925786,  552309],
  ['Middle East EGY', 5677273,  7971620],
  ['GBR', 3018005,  6180157],
  ['Middle East IRN', 5137249,  7313714],
  ['Middle East IRQ', 1236809,  3109076],
  ['Middle East ISR', 3128155,  748560],
  ['Europe RUS', 1256686, 14185000],
  ['Russia RA', 1237809, 30700700]
];


export default function Footer() {
  return (
    
    <div className='foot'>
        
        <div className='footChart'>
        <Chart
                  width={'1700px'}
                  height={'86px'}
                  chartType="BarChart"
                  loader={<div>Loading Chart</div>}
                  data={data1}
                  options={{
                    // title: 'Recovered',
                    chartArea: { width: '90%' },
                    // hAxis: {
                    //   title: 'Recovered',
                    //   minValue: 0,
                    // },
                    // vAxis: {
                    //   title: 'City',
                    // },
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />              

        </div>

        
    </div>
    
  )
}
