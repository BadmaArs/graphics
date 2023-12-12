import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const originalData = [
  0,  // Значение в январе
  305,  // Значение в феврале
  420,  // Значение в марте
  525,  // Значение в апреле
  730,  // Значение в мае
  730,
  970,
];

// Преобразование в нарастающие значения
const cumulativeData = originalData.reduce((acc, currentValue, index) => {
  if (index === 0) {
    // Первое значение остается без изменений
    return [currentValue];
  } else {
    // Каждое последующее значение - сумма предыдущих значений и текущего
    const sum = acc[index - 1] + currentValue;
    return [...acc, sum];
  }
}, []);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  // Задайте размеры графика
  width: 400,
  height: 300,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: cumulativeData,
      borderColor: 'rgb(113, 30, 30)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export function App() {

  return (
    <>
      <div className="grafp" style={{ width: '1200px', height: '1000px' }}>
        <Line options={options} data={data}/>;
      </div>
    </>
  )
  
  
}
export default App

