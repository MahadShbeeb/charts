import { Scatter } from 'react-chartjs-2';

const ScatterChart= () => {
  const data = {
    datasets: [
      {
        label: 'Scatter Dataset',
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 10 },
          { x: 20, y: 30 },
          { x: 25, y: 5 },
          { x: 30, y: 25 },
        ],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
      },
    ],
  };

  return (
    <div>
      <h2>Scatter Chart</h2>
      <Scatter data={data} />
    </div>
  );
};

export default ScatterChart;
