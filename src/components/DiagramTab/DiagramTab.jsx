import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chart } from 'components/Chart/Chart';
import { getTransactionsSummary } from 'redux/transactionSumController/transactionSumControllerOperations';
import {
  selectExpenseSummary,
  selectIncomeSummary,
  selectTrSummary,
} from 'redux/transactionSumController/transactionSumControllerSelectors';

import { StatisticTabel } from 'components/StatisticTable/StatisticTable';
import { ChartBox, Box, Title, Wrapper } from './DiagramTab.styled';

import { getLang } from "redux/lang/langSelector";
import { langOptionsDiagramTab } from '../../assets/lang/langOptionsDiagramTab';
import { getTheme } from '../../redux/theme/themeSelector';

export const DiagramTab = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const trSummary = useSelector(selectTrSummary);
  const expenseSummary = useSelector(selectExpenseSummary);
  const incomeSummary = useSelector(selectIncomeSummary);
  const dispatch = useDispatch();

  const lang = useSelector(getLang);
  const { StatisticsText, } = langOptionsDiagramTab;
  const theme = useSelector(getTheme);

  useEffect(() => {
    const fetchTransactionsSummary = ({ month, year }) => {
      dispatch(getTransactionsSummary({ month, year }));
    };

    if (month && year) {
      fetchTransactionsSummary({ month, year });
    }
  }, [month, year, dispatch]);

  return (
    <Wrapper>
      <Title
      style={{
        color: theme === 'light' ? 'var(--title-black-color)' : 'var(--text-white-color)',
      }}
      >{StatisticsText[lang]}</Title>
      <Box>
        <ChartBox>{<Chart trSummary={trSummary} />}</ChartBox>
        <StatisticTabel
          setYear={setYear}
          setMonth={setMonth}
          trSummary={trSummary}
          expenseSummary={expenseSummary}
          incomeSummary={incomeSummary}
        />
      </Box>
    </Wrapper>
  );
};
