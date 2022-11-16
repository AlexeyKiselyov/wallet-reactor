import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 20px;
  line-height: 1.5;
`;

export const Wrapper = styled.div`
  padding-top: 43px;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
    max-width: 300px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 0 10px;
    padding-top: 30px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 128px;
    padding: 31px 15px 10px 68px;
  }
`;

export const Box = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    gap: 32px;
  }
`;

export const ChartBox = styled.div`
  width: 288px;
  min-height: 200px;
  flex-shrink: 0;
`;
