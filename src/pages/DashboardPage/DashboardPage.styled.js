import styled from 'styled-components';

export const MainStyled = styled.main`
  backdrop-filter: blur(25px);
`;

export const MainContainer = styled.div`
  padding: 12px 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @include mq(mob) {
    width: 480px;
  }
  @include mq(tab) {
    width: 728px;
    padding: 32px 32px;
  }
  @include mq(desk) {
    width: 1366px;
    padding: 46px 16px;
  }
`;
