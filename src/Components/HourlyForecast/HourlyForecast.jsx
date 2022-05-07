import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
// Styles
import './HourlyForecast.css'
Chart.register(...registerables);



function HourlyForecast({ results }) {
    const data = {
        labels: ['+1 H', '+2 H', '+3 H', '+4 H', '+5 H'],
        datasets: [
            {
                label: `Temperature (${results.unitText})`,
                data: [results.hourly[0].temp, results.hourly[1].temp, results.hourly[2].temp, results.hourly[3].temp, results.hourly[4].temp],
                fill: false,
                backgroundColor: '#1E88B6',
                borderColor: 'rgba(30, 136, 182, 0.5)',
                borderWidth: 4,
                pointRadius: 3,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    color: 'black'
                }
            },
            x: {
                ticks: {
                    color: 'black'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'black'
                }
            }
        }
    };
    return (
        <div className='HourlyForecast'>
            <h2>Hourly Forecast</h2>
            <Line data={data} options={options} />
        </div>
    )
}

export default HourlyForecast