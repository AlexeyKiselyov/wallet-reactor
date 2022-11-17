import styled from 'styled-components';

export const AsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 480px) {
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;
export const AsideBorder = styled.div`
  @media screen and (min-width: 1280px) {
    position: relative;
    padding-top: 40px;
    padding-bottom: 47px;
    padding-right: 69px;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: calc(100vh - 85px);
      border: 1px solid #e7e5f2;
      box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
        1px 0px 0px rgba(255, 255, 255, 0.6);
    }
  }
`;

export const AsideTablet = styled.div`
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    }
  }
`;
