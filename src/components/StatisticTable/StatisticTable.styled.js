import styled from 'styled-components';
import { switchBgStatistic } from 'helpers/switchBgStatistic';

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
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

export const Select = styled.select`
  appearance: none;
  width: 160px;
  height: 50px;
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

export const customStylesSelect = (isMobile, darkTheme) => ({
  control: styles => ({
    ...styles,
    backgroundColor: darkTheme ? '#e0e0e0' : 'inherit',
    width: '100%',
    height: '50px',
    border: '1px solid #000000',
    borderRadius: '30px',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    paddingLeft: '10px',
    paddingRight: '16px',

    color: '#e0e0e0',
    fill: 'blue',
    fontFamily: 'Exo,  sans-serif',
    fontWeight: `400`,
    fontSize: `18`,
    lineHeight: 1.5,
    outline: 'none',
    cursor: 'pointer',
    marginBottom: isMobile ? '20px' : '0',
    marginTop: isMobile ? '20px' : '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    ':hover': {
      borderColor: '#000000',
    },
  }),
  container: styles => ({
    ...styles,
    flexGrow: '1',
    ':first-of-type': {
      marginRight: isMobile ? '0' : '20px',
      flexGrow: '2',
      flexShrink: '0',
    },
  }),
  ValueContainer: styles => ({
    ...styles,
    paddingRight: '10px',
  }),
  indicatorSeparator: styles => ({
    ...styles,
    display: 'none',
  }),

  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    verticalAlign: 'center',
    borderRadius: '15px',
    padding: '15px',
    backgroundColor: isDisabled
      ? undefined
      : isSelected
      ? data.color
      : isFocused
      ? 'rgba(255, 255, 255, 0.5)'
      : undefined,

    color: isDisabled
      ? '#ccc'
      : isSelected
      ? data.color
      : isFocused
      ? '#ff6596'
      : undefined,

    cursor: isDisabled ? 'not-allowed' : 'default',

    ':active': {
      ...styles[':active'],
      backgroundColor: !isDisabled
        ? isSelected
          ? data.color
          : 'rgba(255, 255, 255, 0.5)'
        : undefined,
    },
    ':hover': {
      color: '#ff6596',
      background: 'rgba(255, 255, 255, 0.5)',
    },
    ':focus': {
      color: '#ff6596',
      background: 'rgba(255, 255, 255, 0.5)',
    },
  }),
  menu: styles => ({
    ...styles,
    background: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(25px)',
    borderRadius: '15px',
    zIndex: '1000000',
  }),
  menuList: styles => ({
    ...styles,
    overflow: 'hidden scroll',

    '::-webkit-scrollbar': {
      width: '4px',
    },
    '::-webkit-scrollbar-track': {
      borderRadius: '2px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#24cca7',
      borderRadius: ' 2px',
    },
  }),
});

export const Table = styled.table`
  max-width: 395px;
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TabHeader = styled.th`
  background-color: #fff;
  padding: 16px 20px 15px 20px;

  &:first-child {
    border-radius: 30px 0px 0px 30px;
    margin-right: auto;
  }
  &:last-child {
    border-radius: 0px 30px 30px 0px;
    text-align: right;
  }
`;

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

  &:last-child {
    padding-right: 20px;
    display: flex;
    justify-content: right;
  }
`;

export const Total = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 15px 10px 15px 20px;
`;
