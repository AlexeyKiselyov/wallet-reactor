import {
  Wrapper,
  SelectWrap,
  SelectField,
  Select,
  Option,
  Table,
  TabHeader,
  Tabrow,
  TrSummaryNum,
  TrSummaryWrap,
  TrSummaryField,
  TrSummaryStr,
} from './StatisticTable.styled';

import { getLang } from "redux/lang/langSelector";
import { langOptionsStatisticTable } from '../../assets/lang/langOptionsStatisticTable';
import { useSelector } from 'react-redux';

export const StatisticTabel = ({
  handleChange,
  trSummary,
  expenseSummary,
  incomeSummary,
}) => {

  const lang = useSelector(getLang);
  const { MonthText, YearText, CategoryText, SumText, ExpansesText, IncomesText } = langOptionsStatisticTable;

  return (
    <div>
      <SelectWrap>
        <SelectField>
          <Select onChange={handleChange} name="month">
            <Option value="" hidden>
              {MonthText[lang]}
            </Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
            <Option value="7">7</Option>
            <Option value="8">8</Option>
            <Option value="9">9</Option>
            <Option value="10">10</Option>
            <Option value="11">11</Option>
            <Option value="12">12</Option>
          </Select>
        </SelectField>

        <SelectField>
          <Select onChange={handleChange} name="year">
            <Option value="" hidden>
              {YearText[lang]}
            </Option>
            <Option value="2023">2019</Option>
            <Option value="2023">2020</Option>
            <Option value="2022">2021</Option>
            <Option value="2022">2022</Option>
            <Option value="2023">2023</Option>
          </Select>
        </SelectField>
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
    </div>
  );
};

//  <Total>
//           <p>Expenses:</p> <TrSummaryNum>{expenseSummary}</TrSummaryNum>
//         </Total>
//         <Total>
//           <p>Income: </p> <TrSummaryNum>{incomeSummary}</TrSummaryNum>
//         </Total>
