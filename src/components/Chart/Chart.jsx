import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

import { switchBgChart } from 'helpers/switchBgStatistic';
import { ChartWrapper, ChartBalInfo } from './Chart.styled';
import { getLang } from 'redux/lang/langSelector';
import { langOptionsChart } from '../../assets/lang/langOptionsChart';
import { getTheme } from '../../redux/theme/themeSelector';

ChartJS.register(ArcElement, Tooltip);

export const Chart = ({ trSummary }) => {
  const name = trSummary.map(sum => sum.name);
  const total = trSummary.map(sum => sum.total);
  const colors = name.map(sum => switchBgChart(sum));
  const lang = useSelector(getLang);
  const { SelectPeriodText } = langOptionsChart;
  const theme = useSelector(getTheme);

  const options = {
    cutout: '65%',
  };

  const initialData = {
    labels: ['No trasactions'],
    datasets: [
      {
        label: '# of Votes',
        data: [1],
        backgroundColor: ['#a6a6a6'],
        borderColor: ['transparent'],
      },
    ],
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
        <ChartBalInfo
        style={{
          color:
            theme === 'light'
              ? 'var(--title-black-color)'
              : 'var(--text-white-color)',
        }}
        >{SelectPeriodText[lang]}</ChartBalInfo>
      )}
    </ChartWrapper>
  );
};
