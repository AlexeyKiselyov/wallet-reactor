import { useMedia } from 'react-use';
import Select from 'react-select';

import { getLang } from 'redux/lang/langSelector';
import { langOptionsStatisticTable } from '../../assets/lang/langOptionsStatisticTable';
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelector';

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

  const theme = useSelector(getTheme);
  const darkTheme = theme === 'dark';
  const lang = useSelector(getLang);
  const {
    CategoryText,
    SumText,
    ExpansesText,
    IncomesText,
    MonthText,
    YearText,
    JanuaryText,
    FebruaryText,
    MarchText,
    AprilText,
    MayText,
    JuneText,
    JulyText,
    AugustText,
    SeptemberText,
    OctoberText,
    NovemberText,
    DecemberText,
  } = langOptionsStatisticTable;

  const dataMonth = [
    { id: 0, label: JanuaryText[lang], value: '1' },
    { id: 1, label: FebruaryText[lang], value: '2' },
    { id: 2, label: MarchText[lang], value: '3' },
    { id: 3, label: AprilText[lang], value: '4' },
    { id: 4, label: MayText[lang], value: '5' },
    { id: 5, label: JuneText[lang], value: '6' },
    { id: 6, label: JulyText[lang], value: '7' },
    { id: 7, label: AugustText[lang], value: '8' },
    { id: 8, label: SeptemberText[lang], value: '9' },
    { id: 9, label: OctoberText[lang], value: '10' },
    { id: 10, label: NovemberText[lang], value: '11' },
    { id: 11, label: DecemberText[lang], value: '12' },
  ];

  const selectOption = data =>
    data.reduce((acc, item) => {
      acc.push({
        value: `${item.value}`,
        label: `${item.label}`,
      });

      return acc;
    }, []);

  return (
    <Box>
      <SelectWrap>
        <Select
          name="month"
          placeholder={MonthText[lang]}
          styles={customStylesSelect(isMobile, darkTheme)}
          onChange={e => {
            setMonth(e.value);
          }}
          options={selectOption(dataMonth)}
        ></Select>

        <Select
          name="year"
          placeholder={YearText[lang]}
          styles={customStylesSelect(isMobile, darkTheme)}
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
              <TabHeader
                style={{
                  backgroundColor:
                    theme === 'light' ? '' : 'var(--dark-mood-form-color)',
                  color:
                    theme === 'light'
                      ? 'var(--title-black-color)'
                      : 'var(--text-white-color)',
                }}
              >
                {CategoryText[lang]}
              </TabHeader>
              <TabHeader
                style={{
                  backgroundColor:
                    theme === 'light' ? '' : 'var(--dark-mood-form-color)',
                  color:
                    theme === 'light'
                      ? 'var(--title-black-color)'
                      : 'var(--text-white-color)',
                }}
              >
                {SumText[lang]}
              </TabHeader>
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
            <TrSummaryStr
              style={{
                color:
                  theme === 'light'
                    ? 'var(--title-black-color)'
                    : 'var(--text-white-color)',
              }}
            >
              {ExpansesText[lang]}:{' '}
            </TrSummaryStr>
            <TrSummaryNum red>
              {Math.abs(expenseSummary).toFixed(2)}
            </TrSummaryNum>
          </TrSummaryField>
          <TrSummaryField>
            <TrSummaryStr
              style={{
                color:
                  theme === 'light'
                    ? 'var(--title-black-color)'
                    : 'var(--text-white-color)',
              }}
            >
              {IncomesText[lang]}:{' '}
            </TrSummaryStr>
            <TrSummaryNum>{Math.abs(incomeSummary).toFixed(2)}</TrSummaryNum>
          </TrSummaryField>
        </TrSummaryWrap>
      </Wrapper>
    </Box>
  );
};
