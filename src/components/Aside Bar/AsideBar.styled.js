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
