import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const Blockquote = styled.blockquote`
  transition: ${p => p.theme.colorModeTransition};
  margin: 15px auto 50px;
  color: ${p => p.theme.colors.articleText};
  border-left: 0.25em solid ${p => p.theme.colors.articleText};
  font-family: ${p => p.theme.fonts.sansSerif};
  font-style: italic;
  padding: 0 1em;
  opacity: 0.7;
  box-sizing: border-box;

  max-width: 680px;

  ${mediaqueries.phablet`
    max-width: 486px;
  `};

  ${mediaqueries.desktop`
    max-width: 507px;
  `}
  ${mediaqueries.tablet`
    max-width: 486px;
  `};

  & > p {
    font-family: ${p => p.theme.fonts.sansSerif};
    width: 100%;
    font-size: 18px;
    line-height: 1.32;
    margin: 10px 0;
    padding: 0 !important;

    width: 100%;
  }
`;

export default Blockquote;
