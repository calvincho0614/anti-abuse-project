import React from 'react';
import PropTypes from 'prop-types';
import {Line} from 'react-chartjs-2';
import {CardHeader, Card, Col, CardBody} from 'reactstrap';

const MyDiagram = props => {
    let userData = {},
        dtType = props.title,
        labels = [],
        dataSets = [],
        tempValue = [],
        maxValue = 0,
        step_size = 0;
    if (props.hasOwnProperty('data') && props.data.length) {
        dataSets = props.data.map((o, i) => ({
            label: o.name,
            fill: false,
            lineTension: 0.1,
            backgroundColor: props.data[i].color,
            borderColor: props.data[i].color,
            borderWidth: 2,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: props.data[i].color,
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: props.data[i].color,
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: o.data.map(o=>o.data)
        }));
    }
    tempValue = dataSets.map(o => (Math.max(...o.data)));
    maxValue = Math.max(...tempValue);
    step_size = (maxValue <= 10)
        ? 1
        : 0;
    labels = props.hasOwnProperty('date') && props.date.length
        ? [...props.date]
        : [];
    userData = {
        labels: labels,
        datasets: dataSets
    };
    return (<Col key={props.title}>
        <Card>
            <CardHeader>{dtType}</CardHeader>
            <CardBody>
                <div data-test="MyDiagramComponent"
                    className="chart-wrapper" style={{
                        'height' : '500px'
                    }}>
                    <Line data={userData} options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            stepSize: step_size,
                                            beginAtZero: true
                                        }
                                    }
                                ]
                            },
                            tooltips: {
                                mode: 'point'
                            }
                        }}/>
                </div>
            </CardBody>
        </Card>
    </Col>);
}

MyDiagram.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({
            date: PropTypes.string.isRequired,
            data: PropTypes.number.isRequired
        })).isRequired,
    })).isRequired,
    date: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default MyDiagram;