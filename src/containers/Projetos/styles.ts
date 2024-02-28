import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
    animation: fadeIn 2s linear;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`
