import styled from 'styled-components';

const Title = styled.h2`
  margin-bottom: 20px;
  line-height: 1.5;
`;

const Wrapper = styled.div`
  padding: 32px 0 0 68px;
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 32px;
`;

const ChartBox = styled.div`
  width: 288px;
  min-height: 200px;
  flex-shrink: 0;
`;

export { Title, Wrapper, Box, ChartBox };
