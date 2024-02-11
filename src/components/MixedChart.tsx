import { Line, Bar } from 'react-chartjs-2';

const MixedChart= () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Visitors',
        data: [35, 49, 60, 71, 46, 45, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Mixed Chart</h2>
      <Line data={data} />
      <Bar data={data} />
    </div>
  );
};

export default MixedChart;
