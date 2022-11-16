import { useMedia } from 'react-use';
import Select from 'react-select';

import { getLang } from "redux/lang/langSelector";
import { langOptionsStatisticTable } from '../../assets/lang/langOptionsStatisticTable';
import { useSelector } from 'react-redux';

import {
  Box,
  SelectWrap,
  Table,
  Wrapper,
  TabHeader,
  Tabrow,
  TrSummaryNum,
  TrSummaryWrap,
  TrSummaryField,
  TrSummaryStr,
} from './StatisticTable.styled';
import { customStylesSelect } from './StatisticTable.styled';

const dataMonth = [
  { id: 0, label: 'January', value: '1' },
  { id: 1, label: 'February', value: '2' },
  { id: 2, label: 'March', value: '3' },
  { id: 3, label: 'April', value: '4' },
  { id: 4, label: 'May', value: '5' },
  { id: 5, label: 'June', value: '6' },
  { id: 6, label: 'July', value: '7' },
  { id: 7, label: 'August', value: '8' },
  { id: 8, label: 'September', value: '9' },
  { id: 9, label: 'October', value: '10' },
  { id: 10, label: 'November', value: '11' },
  { id: 11, label: 'December', value: '12' },
];

function generateArrayOfYears() {
  const max = new Date().getFullYear();
  const min = max - 4;
  const years = [];

  for (let i = max; i >= min; i--) {
    years.push({
      value: i,
      label: i.toString(),
    });
  }
  return years;
}

export const StatisticTabel = ({
  trSummary,
  expenseSummary,
  incomeSummary,
  setYear,
  setMonth,
}) => {

  const isMobile = useMedia('(max-width: 767px)');

  const selectOption = data =>
    data.reduce((acc, item) => {
      acc.push({
        value: `${item.value}`,
        label: `${item.label}`,
      });

      return acc;
    }, []);

  const lang = useSelector(getLang);
  const { CategoryText, SumText, ExpansesText, IncomesText } = langOptionsStatisticTable;
//    MonthText, YearText

  return (
    <Box>
      <SelectWrap>
        <Select
          name="month"
          placeholder="Month"
          styles={customStylesSelect(isMobile)}
          onChange={e => {
            setMonth(e.value);
          }}
          options={selectOption(dataMonth)}
        ></Select>

        <Select
          name="year"
          placeholder="Year"
          styles={customStylesSelect(isMobile)}
          onChange={e => {
            setYear(e.value);
          }}
          options={selectOption(generateArrayOfYears())}
        ></Select>       
       
      </SelectWrap>

      <Wrapper>
        <Table>
          <thead>
            <tr>
              <TabHeader>{CategoryText[lang]}</TabHeader>
              <TabHeader>{SumText[lang]}</TabHeader>
            </tr>
          </thead>
          <tbody>
            {trSummary.reduce((acc, { name, total, type }) => {
              if (type !== 'INCOME') {
                acc.push(
                  <tr key={name} type={type}>
                    <Tabrow name={name}>{name}</Tabrow>
                    <Tabrow>{Math.abs(total).toFixed(2)}</Tabrow>
                  </tr>
                );
              }
              return acc;
            }, [])}
          </tbody>
        </Table>
        <TrSummaryWrap>
          <TrSummaryField>
            <TrSummaryStr>{ExpansesText[lang]}: </TrSummaryStr>
            <TrSummaryNum red>
              {Math.abs(expenseSummary).toFixed(2)}
            </TrSummaryNum>
          </TrSummaryField>
          <TrSummaryField>
            <TrSummaryStr>{IncomesText[lang]}: </TrSummaryStr>
            <TrSummaryNum>{Math.abs(incomeSummary).toFixed(2)}</TrSummaryNum>
          </TrSummaryField>
        </TrSummaryWrap>
      </Wrapper>
    </Box>
  );
};
