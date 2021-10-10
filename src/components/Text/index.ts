import styled from 'styled-components';

import { errorColor, mainFontColor } from '../../commons/colors';

type TextProps = {
  error?: boolean;
};

const Text = styled.p`
  font-size: 1em;
  color: ${({ error }: TextProps) => (error ? errorColor : mainFontColor)};
`;

export default Text;
