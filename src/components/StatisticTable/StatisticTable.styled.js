import styled from 'styled-components';
import { switchBgStatistic } from 'helpers/switchBgStatistic';
import icon from '../../images/sprite.svg';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
  overflow: visible scroll;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 46px;
    margin-right: 0;
    max-width: 715px;
    max-height: 80vh;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
  }
`;

export const TrSummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;

  margin-top: 16px;
`;

export const TrSummaryField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TrSummaryStr = styled.span`
  font-weight: 700;
  line-height: calc(24 / 16);
`;

export const TrSummaryNum = styled.span`
  font-weight: 700;
  line-height: calc(24 / 16);
  color: ${p => (p.red ? '#FF6596' : '#24CCA7')};
`;

export const SelectWrap = styled.div`
  @media screen and (max-width: 767px) {
    display: block;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const SelectField = styled.div`
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  position: relative;

  &::after {
    content: '';
    background-image: url(${icon});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 18px;
    height: 9px;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    position: absolute;
    pointer-events: none;
  }
`;

export const Select = styled.select`
  appearance: none;
  width: 160px;
  border: 1px solid #000000;
  border-radius: 30px;
  padding: 12px 30px 14px 20px;
  background-color: inherit;
  outline: none;
  cursor: pointer;
  &::-ms-expand {
    display: none;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    width: 182px;
  }
`;

export const Option = styled.option`
  line-height: calc(24 / 16);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TabHeader = styled.th`
  background-color: #fff;
  padding: 16px 10px 15px 20px;

  &:first-child {
    border-radius: 30px 0px 0px 30px;
  }
  &:last-child {
    border-radius: 0px 30px 30px 0px;
  }
`;

export const TabTr = styled.tr``;

export const Tabrow = styled.td`
  padding: 16px 10px 15px 60px;
  position: relative;

  &:first-child::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 18px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-color: ${switchBgStatistic};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
`;

export const Total = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 15px 10px 15px 20px;
`;
