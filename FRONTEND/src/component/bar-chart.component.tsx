import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const days = []
for(let i=0; i<30; i++){
    days.push(i+1);
}
// const labels = ['1', 'February', 'March'];
const labels = days;

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [10000,100],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function BarChart() {
  return (
    <>
        <div className='w-full bg-white border-2 rounded-xl mt-10 p-5'>
            <Bar height={"30px"} width={"100%"} options={options} data={data} />
        </div>
    </>
  );
}
