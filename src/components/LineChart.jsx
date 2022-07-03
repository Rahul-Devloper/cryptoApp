import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  title,
  Tooltip,
  Legend
)
import { Col, Row, Typography } from 'antd'

const { Title } = Typography

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = []
  const coinTimeStamp = []

  for (let i = 0; i < coinHistory?.data?.history.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i].price)
    coinTimeStamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    )
  }

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${coinName} Line Chart`,
      },
    },
  }
  return (
    <>
      <Row className='chart-header'>
        <Title level={2} className='chart-title'>
          {coinName} Price Chart
        </Title>
        <Col className='price-container'>
          <Title level={5} className='price-change'>
            {coinHistory?.data?.change}
          </Title>
          <Title level={5} className='current-price'>
            Current {coinName} Price: ${currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart
