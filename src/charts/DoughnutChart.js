import React from 'react'
import { Doughnut} from 'react-chartjs-2'

function DoughnutChart() {
    const data={
        labels :
            ['Jan','Feb','Mar','Apr','May'],
        datasets:[
        {
            label: 'Sales for 2020(M)',
            data:[3,2,1,2,5],
        
            backgroundColor:
             ['rgba(255,99,186,1)',
            'rgba(255,205,86,1)',
            'rgba(55,146,235,1)',
            'rgba(255,159,64,1)',
            'rgba(155,106,255,1)']
           

        },
        {
            label: 'Sales for 2019(M)',
            data: [1,3,2,2,3],
            backgroundColor:
            ['rgba(255,99,186,1)',
            'rgba(255,205,86,1)',
            'rgba(55,146,235,1)',
            'rgba(255,159,64,1)',
            'rgba(155,106,255,1)']
        }
        ]
    }
    const options ={
        title :{
            display: true,
            text: 'Doughnut Chart'
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
    return <Doughnut data={data} options={options}/>
}

export default DoughnutChart
