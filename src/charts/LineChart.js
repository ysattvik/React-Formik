import React from 'react'
import { Line} from 'react-chartjs-2'

function LineChart() {
    const data={
        labels :
            ['Jan','Feb','Mar','Apr','May'],
        datasets:[
        {
            label: 'Sales for 2020(M)',
            data:[3,2,1,2,5],
            borderColor: ['rgba(255,46,186,0.5)'],
            backgroundColor: ['rgba(255,46,186,0.5)'],
            pointBackgroundColor:['rgba(255,46,186,0.5)'],
            pointBorderColor:['rgba(255,46,186,0.5)']

        },
        {
            label: 'Sales for 2019(M)',
            data: [1,3,2,2,3],
            borderColor: ['rgba(255,206,86,0.5)'],
            backgroundColor: ['rgba(55,206,86,0.5)'],
            pointBackgroundColor:['rgba(55,206,86,0.5)'],
            pointBorderColor:['rgba(55,206,86,0.5)']
        }
        ]
    }
    const options ={
        title :{
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:6,
                        stepSize: 1
                    }
                }
            ]
        }
    }
    return <Line data={data} options={options}/>
}

export default LineChart
