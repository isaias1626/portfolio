import styled from 'styled-components'

export const FotoPerfil = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-bottom: 24px;
  animation: fadeIn 2s linear;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
