import styled from 'styled-components';

export const Main = styled.main`
  width: 80%;
  height: 50%;
  overflow: hidden;
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'body body body body body body'
    'body body body body body body'
    'body body body body body body'
    'body body body body body body'
    'footer footer footer footer footer footer';
`;