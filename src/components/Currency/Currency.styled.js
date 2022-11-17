import styled from 'styled-components';
import CurrencyWave from '../../assets/images/CurrencyWave.svg';
import CurrencyWaveMob from '../../assets/images/CurrencyWaveMob.svg';
import CurrencyWaveTab from '../../assets/images/CurrencyWaveTab.svg';

export const TableWrap = styled.div`
  width: 280px;
  height: 174px;

  border-radius: 30px;
  color: var(--primary-background-color);
  background: url(${CurrencyWaveMob}) no-repeat bottom,
    linear-gradient(
      to bottom,
      rgb(74, 86, 226, 0.8) 50px,
      var(--blue-background-color) 50px
    );

  @media (min-width: 768px) {
    width: 336px;
    height: 182px;
    background: url(${CurrencyWaveTab}) no-repeat bottom,
      linear-gradient(
        to bottom,
        rgb(74, 86, 226, 0.8) 50px,
        var(--blue-background-color) 50px
      );
  }
  @media (min-width: 1280px) {
    width: 393px;
    height: 347px;
    background: url(${CurrencyWave}) no-repeat bottom,
      linear-gradient(
        to bottom,
        rgb(74, 86, 226, 0.8) 60px,
        var(--blue-background-color) 60px
      );
  }
`;

export const Table = styled.table`
  width: 100%;
  padding: 11px 17px 20px 20px;
  @media (min-width: 768px) {
    padding: 11px 20px 20px 20px;
  }
  @media (min-width: 1280px) {
    padding: 17px 60px 17px 44px;
  }
`;

export const TableError = styled.table`
  width: 100%;
  padding: 11px 17px;
  @media (min-width: 768px) {
    padding: 11px 20px;
  }
  @media (min-width: 1280px) {
    padding: 17px 60px 17px 44px;
  }
`;

export const TableTitle = styled.th`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 28px;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 36px;
  }
`;

export const TableText = styled.td`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 12px;
  @media (min-width: 1280px) {
    padding-bottom: 24px;
  }
`;

export const TableRow = styled.tr``;

export const TextError = styled.div`
  @media (min-width: 1280px) {
    text-align: center;
    margin: 10px;
  }
  @media (min-width: 768px) {
    text-align: center;
    margin: 10px;
  }
  @media screen and (min-width: 320px) {
    text-align: center;
    margin: 0 10px 0 10px;
  }
`;
