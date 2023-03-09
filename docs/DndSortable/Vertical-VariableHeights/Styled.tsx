import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  justify-content: center;
`;

export const UlWrapper = styled.ul`
  display: grid;
  min-width: 350px;
  min-height: 200px;
  box-sizing: border-box;
  padding: 20px;
  padding-bottom: 0;
  border-radius: 5px;
  margin: 10px;
  grid-auto-rows: max-content;
  grid-gap: 10px;
  transition: background-color 350ms ease;

  &::after {
    height: 10px;
    content: '';
  }
`;
