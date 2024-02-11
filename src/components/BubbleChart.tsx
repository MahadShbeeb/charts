import { Bubble } from 'react-chartjs-2';

const BubbleChart= () => {
  const data = {
    datasets: [
      {
        label: 'Dataset',
        data: [
          { x: 20, y: 30, r: 15 },
          { x: 40, y: 10, r: 10 },
          { x: 30, y: 20, r: 8 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return (
    <div>
      <h2>Bubble Chart</h2>
      <Bubble data={data} />
    </div>
  );
};

export default BubbleChart;
