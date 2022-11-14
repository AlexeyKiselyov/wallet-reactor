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
  flex-direction:column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 32px 32px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;

    width: 1280px;
    padding: 46px 16px;
  }

  /* @include mq(mob) {
    width: 480px;
  }

  @include mq(tab) {
    width: 728px;
    padding: 32px 32px;
  }

  @include mq(desk) {
    flex-direction:row;
    width: 1366px;
    padding: 46px 16px;
  } */
`;
