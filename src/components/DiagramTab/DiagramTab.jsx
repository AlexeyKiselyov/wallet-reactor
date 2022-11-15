import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chart } from 'components/Chart/Chart';
import { StatisticTabel } from 'components/StatisticTable/StatisticTable';

import {
  selectExpenseSummary,
  selectIncomeSummary,
  selectTrSummary,
} from 'redux/transactionSumController/transactionSumControllerSelectors';
import { ChartBox, Box, Title, Wrapper } from './DiagramTab.styled';
import { getTransactionsSummary } from 'redux/transactionSumController/transactionSumControllerOperations';

export const DiagramTab = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const trSummary = useSelector(selectTrSummary);
  const expenseSummary = useSelector(selectExpenseSummary);
  const incomeSummary = useSelector(selectIncomeSummary);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTransactionsSummary = ({ month, year }) => {
      dispatch(getTransactionsSummary({ month, year }));
    };

    if (month && year) {
      fetchTransactionsSummary({ month, year });
    }
  }, [month, year, dispatch]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'month':
        setMonth(value);
        break;
      case 'year':
        setYear(value);
        break;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <Title>Statistics</Title>
      <Box>
        <ChartBox>{<Chart trSummary={trSummary} />}</ChartBox>
        <StatisticTabel
          handleChange={handleChange}
          trSummary={trSummary}
          expenseSummary={expenseSummary}
          incomeSummary={incomeSummary}
        />
      </Box>
    </Wrapper>
  );
};
