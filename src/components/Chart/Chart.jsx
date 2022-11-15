import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { switchBgChart } from 'helpers/switchBgStatistic';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper, ChartBalInfo } from './Chart.styled';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip);

export const Chart = ({ trSummary }) => {
  const name = trSummary.map(sum => sum.name);
  const total = trSummary.map(sum => sum.total);
  const colors = name.map(sum => switchBgChart(sum));

  const options = {
    cutout: '65%',
  };

  const data = {
    labels: name,
    datasets: [
      {
        label: '# of Votes',
        data: total,
        backgroundColor: colors,
        borderColor: ['transparent'],
      },
    ],
  };

  const initialData = {
    labels: ['No trasactions'],
    datasets: [
      {
        label: '# of Votes',
        data: [1],
        backgroundColor: ['#C5BAFF'],
        borderColor: ['transparent'],
      },
    ],
  };

  const balance = useSelector(authSelectors.selectBalance);

  return (
    <ChartWrapper>
      {trSummary.length > 0 ? (
        <Doughnut
          redraw={true}
          options={options}
          data={data}
          height="288px"
          width="288px"
        />
      ) : (
        <Doughnut
          redraw={true}
          options={options}
          data={initialData}
          height="288px"
          width="288px"
        />
      )}
      {trSummary.length > 0 ? (
        <ChartBalInfo>&#8372; {balance}.00</ChartBalInfo>
      ) : (
        <ChartBalInfo>Select period</ChartBalInfo>
      )}
    </ChartWrapper>
  );
};
