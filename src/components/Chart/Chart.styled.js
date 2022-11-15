import styled from 'styled-components';

export const ChartWrapper = styled.div`
  position: relative;
`;

export const ChartBalInfo = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 18px;
  line-height: calc(26 / 18);
  font-weight: 700;
`;
