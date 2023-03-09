import styled from '@emotion/styled';

export const ActionWrapper = styled.button`
  display: flex;
  width: 12px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: none;
  border-radius: 5px;
  appearance: none;
  background-color: transparent;
  cursor: var(--cursor, pointer);
  outline: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;

  @media (hover: hover) {
    &:hover {
      background-color: var(--action-background, rgb(0 0 0 / 5%));

      svg {
        fill: #6f7b88;
      }
    }
  }

  svg {
    overflow: visible;
    height: 100%;
    flex: 0 0 auto;
    margin: auto;
    fill: #919eab;
  }

  &:active {
    background-color: var(--background, rgb(0 0 0 / 5%));

    svg {
      fill: var(--fill, #788491);
    }
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgb(255 255 255 / 0%), 0 0 0 2px #4c9ffe;
    outline: none;
  }
`;
